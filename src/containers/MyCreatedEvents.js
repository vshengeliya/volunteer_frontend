import React from 'react'
import { Button } from 'semantic-ui-react'
import CreateEventForm from '../components/CreateEventForm'
import EventCardD from '../components/EventCardD'
import {Grid} from 'semantic-ui-react'
import '../CommentContainer.css'

 
class MyCreatedEvents extends React.Component {
    
    renderMyEvents=()=>{
        return this.props.user.events.map ((event)=> 
        <EventCardD event={event}
        deleteEventClickHandler={this.props.deleteEventClickHandler}
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
      <Grid>
            <Grid.Row stretched={'bool'}>
               <div class="wrapper">
               {this.renderMyEvents()}
               </div>
             </Grid.Row>
          </Grid >
      </>
     }
     </>
    )
  }
}
 
export default MyCreatedEvents;