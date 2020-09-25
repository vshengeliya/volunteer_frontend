// src/Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom';
 
class NavBar extends React.Component {
    render() {
        
            const link = {
        width: '80px',
        padding: '10px',
        margin: '0 6px 6px',
        // background: 'blue',
        textDecoration: 'none',
        color: 'black',
        }
    return (
      <div>

        <NavLink
          to="/events"
          exact
          style={link}
          activeStyle={{
            background: 'grey'
          }}
          
        >All events</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'grey'
          }}
        >Login</NavLink>
        <NavLink
          to="/myevents"
          exact
          style={link}
          activeStyle={{
            background: 'grey'
          }}
        >My events</NavLink>

      </div>
    )
  }
}
 
export default NavBar;