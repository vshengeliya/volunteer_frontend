import React from 'react';
import Head from './components/Header'
import Event from './containers/Event'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'


import './App.css';

class App extends React.Component {

  state={
    user: {},
    token: null
  }

  componentDidMount = () => {
 
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
    console.log(" user componentDidMount")
  }

    setUserState = (data) => {
      if (data === "logout") {
          this.setState({
              user: {},
              token: null
             
          })
      } else {
          console.log("Set user state", data)
          this.setState({
              user: data.user,
              token: data.jwt,
          })
      }
    }


  loginHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",

        },
        body: JSON.stringify({ user: userInfo })
    }).then(resp => resp.json())
        .then(data => {
            this.setUserState(data)
            localStorage.setItem("token", data.jwt)
            this.componentDidMount()
        })
}

logOutHelper = () => {
  let state = "logout"
  this.setUserState(state)
  localStorage.clear("token")
}

  render(){

    return (
      <div>
      <Head/>
      <Event 
      user={this.state.user} token = {this.state.token} logOutHelper={this.logOutHelper} setUserState={this.setUserState}
      loginHandler={this.loginHandler}
      componentDidMount={this.componentDidMount}/>  
      </div>
    );
  }
  
}

export default App;
