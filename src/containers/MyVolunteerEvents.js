import React from 'react'
import EventCard from '../components/EventCard'

 
class MyVolunteerEvents extends React.Component {

    renderAllEvents=()=>{
       return this.props.myVolunteerEvents.map ((event)=> 
       <EventCard event={event}
    //    volunteerClickHandler={this.props.volunteerClickHandler}
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