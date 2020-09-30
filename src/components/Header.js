import React from 'react';
import { Header , Icon} from 'semantic-ui-react'
import NavBar from './NavBar'
import "../Header.css"
import { Route } from 'react-router-dom'




function Head() {
  
  return (

    <Header as='h4' block={'bool'} size={'small'} color ={'teal'} dividing={'bool'}> 
        <NavBar/> 
    </Header>
  );
}

export default Head;