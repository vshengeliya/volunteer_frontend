import React from 'react'
import MyVolunteerEvents from './MyVolunteerEvents'

 
class MyEventsContainer extends React.Component {

  
    render() {

        
    return (
      <>
        <h2>My eventsContainer</h2>
        {/* <MyCreatedEvents/> */}
        <MyVolunteerEvents
        myEvents={this.props.myEvents} />
        {/* <UserContainer/> */}
      
     </>
    )
  }
}
 
export default MyEventsContainer;