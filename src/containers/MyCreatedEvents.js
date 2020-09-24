import React from 'react'
import EventCard from '../components/EventCard'
import { Button } from 'semantic-ui-react'
import CreateEventForm from '../components/CreateEventForm'
import EventCardD from '../components/EventCardD'

 
class MyCreatedEvents extends React.Component {

    state = {
        myCreatedEvents: [],
       
      }
   
    //   componentDidMount = () => {

    //     const token = localStorage.getItem('token')
    //     if (token){

    //         fetch("http://localhost:3000/api/v1/users", {
    //                   method: "GET",
    //                   headers: { Authorization: `Bearer ${token}`},
    //               })
    //         .then(resp => resp.json())
    //         .then(data=> this.setState({myCreatedEvents:data.events}))
    //       }
    //     }
        
    renderMyEvents=()=>{
        return this.props.user.events.map ((event)=> 
        <EventCardD event={event}
        deleteEventClickHandler={this.deleteEventClickHandler}
        //    volunteerClickHandler={this.props.volunteerClickHandler}
        />)
    }
        
  

    deleteEventClickHandler =(obj)=>{
        
        let id = obj.event.id
        let newArray = this.state.myCreatedEvents.filter((event => event.id !== obj.event.id))
        this.setState({myCreatedEvents:newArray})
        let options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                Authorization: `Bearer ${this.props.token}`
            },
        }
        fetch("http://localhost:3000/events/" + id, options)
    }

   
    render() {

        // console.log('my created events', this.props.user.events)
        
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