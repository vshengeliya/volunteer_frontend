import React from 'react'
import EventCard from '../components/EventCard'

 
class MyEvents extends React.Component {

    // renderMyEvents=()=>{
    //    return this.props.myEvents.map ((event)=> <EventCard event={event}/>)
    // }
    render() {
        
    return (
        <>
        <h2>My events</h2>
     {/* {this.renderMyEvents()} */}
     </>
    )
  }
}
 
export default MyEvents;