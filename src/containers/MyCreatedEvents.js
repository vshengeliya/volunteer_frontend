import React from 'react'
import EventCard from '../components/EventCard'
import { Button } from 'semantic-ui-react'

 
class MyCreatedEvents extends React.Component {

    state = {
        myCreatedEvents: []
      }
     
      componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
        //change user when have a auth!!!
        .then(data=> this.setState({myCreatedEvents:data[0].events}))
      }

    renderMyEvents=()=>{
       return this.state.myCreatedEvents.map ((event)=> 
       <EventCard event={event}
    //    volunteerClickHandler={this.props.volunteerClickHandler}
       />)
    }

    render() {
        
    return (
     <>
     
      <Button color='teal' onClick={()=>console.log("click")}>Create a New Event</Button>
      <br/>
      <br/>
      {this.renderMyEvents()}
     </>
    )
  }
}
 
export default MyCreatedEvents;