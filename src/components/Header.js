import React from 'react';
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar'
import "../Header.css"


function Head() {
  
  return (

    <Header as='h4' block={'bool'} size={'small'} color ={'teal'} dividing={'bool'}> 
        <NavBar/> 
    </Header>
  );
}

export default Head;