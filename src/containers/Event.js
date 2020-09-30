import React from 'react'
import AllEventContainer from './AllEventContainer'
import MyEventsContainer from './MyEventsContainer'
import LoginContainer from './LoginContainer'
import CreateAccountContainer from './CreateAccountContainer'
import { Route } from 'react-router-dom'

 
class Event extends React.Component {

    state={
     
        allEvents:[],
        buttonToggle:null,
        searchNameValue:"",
        searchCityValue:"",
        formToggle:false,
        volunteerButtonToggle:false, 
        volunteeredCard:null 
    }



    componentDidMount = () => {
        fetch("http://localhost:3000/events/")
            .then(resp => resp.json())
            .then(data=> this.setState({...this.state, allEvents:data}))
        console.log("componentDidMount")
    }
    
    volunteerClickHandler=(obj)=>{
       
        if (this.props.user.my_attendances.find((event)=> event.id===obj.event.id)){
           return null
        } 
        else{
            this.setState({volunteerButtonToggle:true})

            let event_id = obj.event.id
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    , Authorization: `Bearer ${this.props.token}`
                },
                body: JSON.stringify({user_id: this.props.user.id, event_id: event_id, rating:null}) 
               }  
            fetch("http://localhost:3000/attendances", options)
            .then(resp=>resp.json())
            .then(() => this.props.componentDidMount())
        } 
    }

    searchByNameHandler=(e)=>{
        console.log(e.target.value)
        this.setState({searchNameValue:e.target.value})
    }

    searchByCityHandler=(e)=>{
        console.log(e.target.value)
        this.setState({searchCityValue:e.target.value})
    }

    filteredByNameEvents=()=>{
        let newArray = this.state.allEvents.filter((event)=> event.name.toLowerCase().includes(this.state.searchNameValue.toLowerCase()))
        return newArray  
    }

    filteredByCityEvents=()=>{
        let newArray = this.state.allEvents.filter((event)=> event.city.toLowerCase().includes(this.state.searchCityValue.toLowerCase()))
        return newArray  
    }

    createEventHandler=()=>{
        this.setState({formToggle:true})
    }

    submitFormHandler=(obj)=>{

        let newArray = [...this.props.user.events, obj]
        let eventArray = [...this.state.allEvents, obj]
        let newUser = Object.assign({}, this.props.user);
        newUser.events = newArray;

        this.setState({user: newUser});
        this.setState({allEvents:eventArray})

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
        .then(()=>{
            
            this.setState({formToggle:false})
            this.props.componentDidMount()
        })
            
    }

    deleteEventClickHandler =(obj)=>{
        
        let id = obj.event.id
        // let newArray = this.props.user.events.filter((event => event.id !== obj.event.id))
        let newEventArray = this.state.allEvents.filter((event => event.id !== obj.event.id))
        // let newUser = Object.assign({}, this.props.user);
        // newUser.events = newArray;
        // this.setState({user: newUser});
        this.setState({allEvents:newEventArray})
        this.setState({volunteered:false})

        let options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                Authorization: `Bearer ${this.props.token}`
            },
        }
        fetch("http://localhost:3000/events/" + id, options)
        .then(resp=>resp.json())
        .then(() => {
            fetch("http://localhost:3000/attendances")
            .then(resp=>resp.json())
            .then(() => this.props.componentDidMount())
        })
    }

    submitCommentHandler=(e, eventId)=>{

        let date = new Date().toLocaleDateString()
        let newDate = date.replace(/\//g, '-').split("-").join("-")
        
        let body={
            comment:e.comment,
            user_id: this.props.user.id,
            event_id: eventId ,
            date: newDate
        }
  
        const token = localStorage.getItem('token')
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            // note: Changed this line below to {key:value}
            body: JSON.stringify({comment: body})
        }
        fetch("http://localhost:3000/comments", options)
        .then(resp=>resp.json())
        .then(data=> {
            fetch("http://localhost:3000/events")
            .then(resp => resp.json())
            .then(data=> this.setState({allEvents:data}))
        })
      }

    
    render() {
        
    return (
        <>
        
        <Route path="/events" render={ () =>(

            <AllEventContainer allEvents={this.state.allEvents}
            volunteerClickHandler={this.volunteerClickHandler}
            searchNameValue={this.state.searchNameValue}
            searchCityValue={this.state.searchCityValue}
            searchByNameHandler={this.searchByNameHandler}
            searchByCityHandler={this.searchByCityHandler}
            filteredByNameEvents={this.filteredByNameEvents()}
            filteredByCityEvents={this.filteredByCityEvents()}
            allEvents={this.filteredByCityEvents()}
            volunteerButtonToggle={this.state.volunteerButtonToggle}
            volunteeredCard={this.state.volunteeredCard}
            user={this.props.user}
            allEvents={this.state.allEvents}
            submitCommentHandler={this.submitCommentHandler}  
           
            />
        )
        }/>  
        <Route path="/login" render={ () => <LoginContainer user={this.props.user} token={this.props.token} 
        setUserState={this.props.setUserState} logOutHelper={this.props.logOutHelper}
        loginHandler={this.props.loginHandler}/> } />
        <Route path="/create-account" render={ () => <CreateAccountContainer /> } />

        <Route path="/myevents" render={ () =>
            <MyEventsContainer
            user={this.props.user} token={this.props.token}
            submitFormHandler={this.submitFormHandler}
            createEventHandler={this.createEventHandler}
            formToggle={this.state.formToggle}
            deleteEventClickHandler={this.deleteEventClickHandler}
            componentDidMount={this.props.componentDidMount}
              />
        }/>  
        </>
    )
  }
}
 
export default Event;