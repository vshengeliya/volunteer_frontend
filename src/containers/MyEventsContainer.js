import React from 'react'
import MyVolunteerEvents from './MyVolunteerEvents'

 
class MyEventsContainer extends React.Component {

  state = {
    myVolunteerEvents: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
        //change user when have a auth!!!
        .then(data=> this.setState({myVolunteerEvents:data[0].my_attendances}))
}
    render() {
      
    return (
      <>
        <h2>My eventsContainer</h2>
        {/* <MyCreatedEvents/> */}
        <MyVolunteerEvents
        myVolunteerEvents={this.state.myVolunteerEvents}
        />
        {/* <UserContainer/> */}
      
     </>
    )
  }
}
 
export default MyEventsContainer;