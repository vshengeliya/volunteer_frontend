import React from 'react'
import EventCardD from '../components/EventCardD'
import {Grid} from 'semantic-ui-react'
import '../CommentContainer.css'
 
class MyVolunteerEvents extends React.Component {

   state = {
      myVolunteerEvents: [],
      attendances:[]
    }
   
    componentDidMount = () => {
      let id =this.props.user.id
      const token = localStorage.getItem('token')
      if (token){

        fetch("http://localhost:3000/api/v1/users/", {
                  method: "GET",
                  headers: { Authorization: `Bearer ${token}`},
              })
        .then(resp => resp.json())
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
              .then(resp=>resp.json())
              .then(()=>{
                this.componentDidMount()
                this.props.componentDidMount()
              }) 
                
               })
            })
         }

    renderAllEvents=()=>{
       return this.state.myVolunteerEvents.map ((event)=> 
       <EventCardD event={event}
       deleteEventClickHandler={this.deleteEventClickHandler}
      //  volunteerButtonToggle={this.props.volunteerButtonToggle}
       />)
    }

    render() {

        
    return (
        <>
           <Grid>
            <Grid.Row stretched={'bool'}>
               <div class="wrapper">
               {this.renderAllEvents()}
               </div>
             </Grid.Row>
          </Grid >
     </>
    )
  }
}

export default MyVolunteerEvents