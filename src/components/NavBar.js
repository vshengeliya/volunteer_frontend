// src/Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom';
 
class NavBar extends React.Component {
    render() {
        
    return (
      <div>

        <NavLink
          to="/events"
          exact
          // style={link}
          // activeStyle={{
          //   background: 'grey'
          // }}
          
        >All events</NavLink>
        <br/>
        <NavLink
          to="/login"
          exact
          // style={link}
          // activeStyle={{
          //   background: 'grey'
          // }}
        >Login</NavLink>
        <br/>
        <NavLink
          to="/myevents"
          exact
          // style={link}
          // activeStyle={{
          //   background: 'grey'
          // }}
        >My events</NavLink>

      </div>
    )
  }
}
 
export default NavBar;