import React from 'react'
import EventCard from '../components/EventCard'
import { Button } from 'semantic-ui-react'
import CreateEventForm from '../components/CreateEventForm'

 
class MyCreatedEvents extends React.Component {

    state = {
        myCreatedEvents: [],
        formToggle:false
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
        
    createEventHandler=()=>{
        this.setState({formToggle:true})
    
    }

    submitFormHandler=(obj)=>{

        // console.log(obj)
        let newArray = [...this.state.myCreatedEvents, obj]
        // console.log(array)
        // let newArray = array.push(obj)
        this.setState({myCreatedEvents:newArray})

        let body = {
            name: obj.name,
            value_proposition: obj.valueProposition, 
            event_type: obj.eventType,
            quantity: obj.quantity,
            image: obj.image,
            details: obj.details,
            date: obj.date,
            city: obj.city,
            state: obj.state,
            user_id:23 ///change the user id, when has auth!!!!
        }

        // console.log(body)

        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                //, Authorization: `Bearer ${this.state.token}`
            },
            //change user when have a auth!!!
            body: JSON.stringify(body) //!!!!!!!!!!!change USER ID
           }  
        fetch("http://localhost:3000/events", options)
        .then(resp=>resp.json())
        .then(data=>this.setState({formToggle:false}))
    }
    render() {
        
    return (
     <>
     {this.state.formToggle === true ? <CreateEventForm submitFormHandler={this.submitFormHandler}/>:
     
     <>
      <Button color='teal' onClick={()=>{this.createEventHandler(this.props)}}>Create New Event</Button>
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