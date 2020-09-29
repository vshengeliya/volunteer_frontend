import React from 'react';
import { Header , Icon} from 'semantic-ui-react'
import NavBar from './NavBar'
import { Route } from 'react-router-dom'




function Head() {
  
  return (

    <Header as='h4' block={'bool'} size={'medium'} color ={'teal'} textAligh={'right'} dividing={'bool'}> 
        <NavBar/> 
    </Header>
  );
}

export default Head;