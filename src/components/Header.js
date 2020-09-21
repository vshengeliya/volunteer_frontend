import React from 'react';
import { Header , Icon} from 'semantic-ui-react'
import NavBar from './NavBar'



function Head() {
  
  return (

    <Header as='h2' block={'bool'}> 
        <NavBar/>
    </Header>
  );
}

export default Head;