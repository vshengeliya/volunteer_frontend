import React from 'react'
import EventCard from '../components/EventCard'
import { Button } from 'semantic-ui-react'
import CreateEventForm from '../components/CreateEventForm'
import EventCardD from '../components/EventCardD'

 
class MyCreatedEvents extends React.Component {

    state = {
        myCreatedEvents: [],
        formToggle:false
      }
   
      componentDidMount = () => {

        const token = localStorage.getItem('token')
        if (token){

            fetch("http://localhost:3000/api/v1/users", {
                      method: "GET",
                      headers: { Authorization: `Bearer ${token}`},
                  })
            .then(resp => resp.json())
            .then(data=> this.setState({myCreatedEvents:data.events}))
          }
        }
        
    renderMyEvents=()=>{
        return this.state.myCreatedEvents.map ((event)=> 
        <EventCardD event={event}
        deleteEventClickHandler={this.deleteEventClickHandler}
        //    volunteerClickHandler={this.props.volunteerClickHandler}
        />)
    }
        
    createEventHandler=()=>{
        this.setState({formToggle:true})
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
            user_id: this.props.user.id
        }

        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                 Authorization: `Bearer ${this.props.token}`
            },
            body: JSON.stringify(body)
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