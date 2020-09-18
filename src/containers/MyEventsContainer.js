import React from 'react'
import MyVolunteerEvents from './MyVolunteerEvents'

 
class MyEventsContainer extends React.Component {

  state = {
    myVolunteerEvents: [],
    attendances:[]
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
        //change user when have a auth!!!
        .then(data=> this.setState({myVolunteerEvents:data[0].my_attendances}))
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
    .then(data=>{
      
      fetch("http://localhost:3000/api/v1/users")
      // .then(resp => resp.json())
      //  //change user when have a auth!!!
      //  .then(data=> this.setState({volunteerEvents:data[0].my_attendances}))
    })
  })
}

render() {
  // console.log(this.state.myVolunteerEvents)
      
    return (
      <>
        <h2>My eventsContainer</h2>
        {/* <MyCreatedEvents/> */}
        <MyVolunteerEvents
        myVolunteerEvents={this.state.myVolunteerEvents}
        deleteEventClickHandler={this.deleteEventClickHandler}
        />
        {/* <UserContainer/> */}
     </>
    )
  }
}
 
export default MyEventsContainer;