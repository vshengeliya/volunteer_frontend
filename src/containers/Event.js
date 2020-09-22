import React from 'react'
import AllEventContainer from './AllEventContainer'
import MyEventsContainer from './MyEventsContainer'
import LoginContainer from './LoginContainer'
import { Route } from 'react-router-dom'

 
class Event extends React.Component {

    state={
        user: {},
        token: null,
        allEvents:[],
        volunteerEvents: [],
        buttonToggle:null,
        searchNameValue:"",
        searchCityValue:""
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

    fetchUser=()=>{
        fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
         //change user when have a auth!!!
         .then(data=> this.setState({volunteerEvents:data[0].my_attendances}))
    }
    
    volunteerClickHandler=(obj)=>{
          
          this.fetchUser()
        //change user when have a auth!!!
        
        if (this.state.volunteerEvents.find((event)=> event.id===obj.event.id)){
            console.log(this.state.volunteerEvents)
           return null
        } 
        else{

            let event_id = obj.event.id
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    //, Authorization: `Bearer ${this.state.token}`
                },
                //change user when have a auth!!!
                body: JSON.stringify({user_id: 23, event_id: event_id, rating:null}) //!!!!!!!!!!!change USER ID
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
    
    render() {
        
    return (
        <>
            {this.fetchUser}
        
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
         
            />
        }/>  
        <Route path="/login" render={ () => <LoginContainer user={this.state.user} token={this.state.token} setUserState={this.setUserState}/> } />

        <Route path="/myevents" render={ () =>
            <MyEventsContainer
            volunteerEvents={this.state.volunteerEvents}
            user={this.state.user} token={this.state.token}
              />
        }/>  
        </>
    )
  }
}
 
export default Event;