import React from 'react'
import EventCardD from '../components/EventCardD'

 
class MyVolunteerEvents extends React.Component {

   state = {
      myVolunteerEvents: [],
      attendances:[]
    }
   
    componentDidMount = () => {
      // fetch("http://localhost:3000/api/v1/users")
      fetch("http://localhost:3000/api/v1/users", {
                method: "GET",
                headers: { Authorization: `Bearer ${this.props.token}`},
            })
      .then(resp => resp.json())
      //change user when have a auth!!!
      .then(console.log)
      // .then(data=> this.setState({myVolunteerEvents:data[1].my_attendances}))
    }
    
    deleteEventClickHandler=(obj)=>{
      
      let  newArray = this.state.myVolunteerEvents.filter((event => event.id !== obj.event.id))
      
      this.setState({myVolunteerEvents:newArray})
      fetch("http://localhost:3000/attendances")
      .then(resp=> resp.json())
      .then(data=>
            {
               this.setState({attendances:data})
               let thisEventInAttendances=this.state.attendances.filter(att=> att.event_id===obj.event.id) 
               let attendanceIdArray = thisEventInAttendances.map((id)=>id.id)
               let attendanceId = attendanceIdArray[0]

               fetch("http://localhost:3000/attendances/"+ attendanceId, {method: "DELETE"})
               .then(resp=>resp.json())
               .then(data=>{ fetch("http://localhost:3000/api/v1/users")})
            })
         }

    renderAllEvents=()=>{
       return this.state.myVolunteerEvents.map ((event)=> 
       <EventCardD event={event}
       deleteEventClickHandler={this.deleteEventClickHandler}
       />)
    }

    render() {

      console.log("my volunteer events", this.state.myVolunteerEvents)
        
    return (
        <>
     {this.renderAllEvents()}
     </>
    )
  }
}

export default MyVolunteerEvents