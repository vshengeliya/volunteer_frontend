// src/Navbar.js
import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
 
class NavBar extends React.Component {
    render() {
        
    return (
    
        <>
      <Menu secondary>
       
      <Menu.Item
        as={NavLink} to="/events"
        name='events'
       
      />
        <Menu.Item
          as={NavLink} to="/myevents"
          name='my events'
          
          />
      <Menu.Item position={'right'}
        as={NavLink} to="/login"
        name='login'
       
      />
      <Menu.Item>
      <img id="logo-container" src="./images/volunteer-logo.jpg" alt="volunteer-logo" />
      </Menu.Item>

         </Menu>
        </>
    )
  }
}
 
export default NavBar;