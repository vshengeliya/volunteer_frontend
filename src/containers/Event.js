import React from 'react'
import AllEventContainer from './AllEventContainer'
import MyEventsContainer from './MyEventsContainer'
import { Route } from 'react-router-dom'

 
class Event extends React.Component {

    state={
        allEvents:[],
        buttonToggle:null
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/events/")
            .then(resp => resp.json())
            .then(data=> this.setState({allEvents:data}))
    }

    volunteerClickHandler=(obj)=>{
        console.log(obj.event.id)
  
         let event_id = obj.event.id
         let options = {
             method: "POST",
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
                 //, Authorization: `Bearer ${this.state.token}`
             },
             //change user when have a auth!!!
             body: JSON.stringify({user_id: 17, event_id: event_id, rating:null})
            }
         
         fetch("http://localhost:3000/attendances", options)           
        
    }

    render() {
        
    return (
        <>
        <Route exact path="/" render={ () =>
            <AllEventContainer allEvents={this.state.allEvents}
            volunteerClickHandler={this.volunteerClickHandler}
         
            />
        }/>  

        <Route path="/myevents" render={ () =>
            <MyEventsContainer
              />
        }/>  
        </>
    )
  }
}
 
export default Event;