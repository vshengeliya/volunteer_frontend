import React from 'react'
import EventCard from '../components/EventCard'

 
class AllEventContainer extends React.Component {

    renderAllEvents=()=>{
       return this.props.allEvents.map ((event)=> 
       <EventCard event={event}
       volunteerClickHandler={this.props.volunteerClickHandler}
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
 
export default AllEventContainer;