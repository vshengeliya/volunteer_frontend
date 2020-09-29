import React from 'react';
import Head from './components/Header'
import Event from './containers/Event'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'


import './App.css';

class App extends React.Component {

//   const token = localStorage.getItem('token')
//         if (token){
//             fetch("http://localhost:3000/api/v1/profile", {
//                 method: "GET",
//                 headers: { Authorization: `Bearer ${token}`},
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     this.setState({...this.state.allEvents,
//                         user: data.user,
//                         token: token})
//                 })
//         }

//   loginHandler = (userInfo) => {
//     fetch("http://localhost:3000/api/v1/login", {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             "accept": "application/json",

//         },
//         body: JSON.stringify({ user: userInfo })
//     }).then(resp => resp.json())
//         .then(data => {
//             this.props.setUserState(data)
//             localStorage.setItem("token", data.jwt)
//         })
// }

  render(){

    return (
      <div>
      <Head/>
      <Event/>  
      </div>
    );
  }
  
}

export default App;
