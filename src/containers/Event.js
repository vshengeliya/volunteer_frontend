import React from 'react'
import AllEventContainer from './AllEventContainer'
import MyEvents from './MyEvents'
import { Route } from 'react-router-dom'

 
class Event extends React.Component {

    state={
        allEvents:[]
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/events/")
            .then(resp => resp.json())
            .then(data=> this.setState({allEvents:data}))
    }

    render() {
        
    return (
        <>
        <Route exact path="/" render={ () =>
            <AllEventContainer allEvents={this.state.allEvents}/>
        }/>  

        <Route path="/myevents" render={ () =>
            <MyEvents />
        }/>  
        </>
    )
  }
}
 
export default Event;