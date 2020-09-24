import React from 'react'
import EventCard from '../components/EventCard'
import { Button } from 'semantic-ui-react'
import CreateEventForm from '../components/CreateEventForm'
import EventCardD from '../components/EventCardD'

 
class MyCreatedEvents extends React.Component {
    
    renderMyEvents=()=>{
        return this.props.user.events.map ((event)=> 
        <EventCardD event={event}
        deleteEventClickHandler={this.props.deleteEventClickHandler}
        //    volunteerClickHandler={this.props.volunteerClickHandler}
        />)
    }
        
    render() {

        
    return (
     <>
     {this.props.formToggle === true ? <CreateEventForm submitFormHandler={this.props.submitFormHandler}/>:
     
     <>
      <Button color='teal' onClick={()=>{this.props.createEventHandler(this.props)}}>Create New Event</Button>
      <br/>
      <br/>
      {this.renderMyEvents()}
      </>
     }
     </>
    )
  }
}
 
export default MyCreatedEvents;