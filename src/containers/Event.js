import React from 'react'
import AllEventContainer from './AllEventContainer'
import MyEventsContainer from './MyEventsContainer'
import LoginContainer from './LoginContainer'
import { Route } from 'react-router-dom'
import CreateAccountContainer from './CreateAccountContainer'

 
class Event extends React.Component {

    state={
        user: {},
        token: null,
        allEvents:[],
        buttonToggle:null,
        searchNameValue:"",
        searchCityValue:"",
        formToggle:false,
        volunteerButtonToggle:false, 
        volunteeredCard:null
    }

    setUserState = (data) => {
        if (data === "logout") {
            this.setState({
                user: {},
                token: null,
                allEvents:[]
            })
        } else {
            console.log("Set user state", data)
            this.setState({

                user: data.user,
                token: data.jwt,
            })
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/events/")
            .then(resp => resp.json())
            .then(data=> this.setState({allEvents:data}))
        const token = localStorage.getItem('token')
        if (token){
            fetch("http://localhost:3000/api/v1/profile", {
                method: "GET",
                headers: { Authorization: `Bearer ${token}`},
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        user: data.user,
                        token: token})
                })
        }
    }
    
    volunteerClickHandler=(obj)=>{
       
        // let newArray = [...this.state.user.my_attendances, obj]
        
        // let newUser = Object.assign({}, this.state.user);
        // newUser.events = newArray;

        // this.setState({user: newUser});
        if (this.state.user.my_attendances.find((event)=> event.id===obj.event.id)){
           return null && alert("already volunteered")
        } 
        else{
            this.setState({volunteerButtonToggle:true})

            let event_id = obj.event.id
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    , Authorization: `Bearer ${this.state.token}`
                },
                body: JSON.stringify({user_id: this.state.user.id, event_id: event_id, rating:null}) 
               }  
            fetch("http://localhost:3000/attendances", options)
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

        let newArray = [...this.state.user.events, obj]
        let eventArray = [...this.state.allEvents, obj]
        let newUser = Object.assign({}, this.state.user);
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
            user_id: this.state.user.id
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

    deleteEventClickHandler =(obj)=>{
        
        let id = obj.event.id
        let newArray = this.state.user.events.filter((event => event.id !== obj.event.id))
        let newEventArray = this.state.allEvents.filter((event => event.id !== obj.event.id))
        let newUser = Object.assign({}, this.state.user);
        newUser.events = newArray;
        this.setState({user: newUser});
        this.setState({allEvents:newEventArray})

        let options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                Authorization: `Bearer ${this.state.token}`
            },
        }
        fetch("http://localhost:3000/events/" + id, options)
    }
    
    render() {

    return (
        <>
         <Route path="/create-account" render={ () => <CreateAccountContainer /> } />
        
        <Route exact path="/" render={ () =>
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
            user={this.state.user}
            allEvents={this.state.allEvents}
         
            />
        }/>  
        <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />

        <Route path="/myevents" render={ () =>
            <MyEventsContainer
            user={this.state.user} token={this.state.token}
            submitFormHandler={this.submitFormHandler}
            createEventHandler={this.createEventHandler}
            formToggle={this.state.formToggle}
            deleteEventClickHandler={this.deleteEventClickHandler}
              />
        }/>  
        </>
    )
  }
}
 
export default Event;