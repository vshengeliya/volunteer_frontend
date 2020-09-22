import React from 'react'
import EventCardD from '../components/EventCardD'
 
class MyVolunteerEvents extends React.Component {

   state = {
      myVolunteerEvents: [],
      attendances:[]
    }
   
    componentDidMount = () => {
      const token = localStorage.getItem('token')
      if (token){

        fetch("http://localhost:3000/api/v1/users", {
                  method: "GET",
                  headers: { Authorization: `Bearer ${token}`},
              })
        .then(resp => resp.json())
        // .then(data=> console.log(data))
        .then(data=> this.setState({myVolunteerEvents:data.my_attendances}))
      }
    }
    
    deleteEventClickHandler=(obj)=>{
      
      let  newArray = this.state.myVolunteerEvents.filter((event => event.id !== obj.event.id))
      let options ={
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            Authorization: `Bearer ${this.props.token}`
        },
      }
      this.setState({myVolunteerEvents:newArray})
      fetch("http://localhost:3000/attendances", options)
      .then(resp=> resp.json())
      .then(data=>
            {
               this.setState({attendances:data}, ()=> {
                   console.log("", this.state)
                 let thisEventInAttendances=this.state.attendances.filter(att=> att.event_id===obj.event.id) 
                 let attendanceIdArray = thisEventInAttendances.map((id)=>id.id)
                 let attendanceId = attendanceIdArray[0]
                 fetch("http://localhost:3000/attendances/"+ attendanceId, 
                 {
                  method: "DELETE",
                  headers: {
                      "content-type": "application/json",
                      "accept": "application/json",
                      Authorization: `Bearer ${this.props.token}`
                  },
              })
               })//set state is acync

              //  .then(resp=>resp.json())
              //  .then(data=>{ fetch("http://localhost:3000/api/v1/users")})
            })
         }

    renderAllEvents=()=>{
       return this.state.myVolunteerEvents.map ((event)=> 
       <EventCardD event={event}
       deleteEventClickHandler={this.deleteEventClickHandler}
       />)
    }

    render() {

        
    return (
        <>
     {this.renderAllEvents()}
     </>
    )
  }
}

export default MyVolunteerEvents