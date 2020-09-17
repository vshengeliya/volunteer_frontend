import React from 'react'
import AllEventContainer from './AllEventContainer'
import MyEventsContainer from './MyEventsContainer'
import { Route } from 'react-router-dom'

 
class Event extends React.Component {

    state={
        allEvents:[],
        myEvents:[]
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/events/")
            .then(resp => resp.json())
            .then(data=> this.setState({allEvents:data}))
    }

    volunteerClickHandler=(obj)=>{
        console.log(obj)
        console.log("clicked")
        let newArray=[]
        newArray.push(obj)
        this.setState({myEvents:newArray})

        
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
            <MyEventsContainer myEvents={this.state.myEvents}
            />
        }/>  
        </>
    )
  }
}
 
export default Event;