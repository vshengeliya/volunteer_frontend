import React from 'react';
import { Card, Icon, Image, Grid , Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

function EventCard(props) {

  
  return (
    
    <div >
      <Grid.Column >
        <Card >
           <Image src={props.event.image} ui={false} width='290px' height='200px'/>
           <Card.Content>
            <Card.Header>{props.event.name}</Card.Header>
             <Card.Meta>
                <span className='date'>{props.event.date} @{props.event.city}, {props.event.state}</span>
             </Card.Meta>
             <Card.Description>
               {props.event.details}
             </Card.Description>
           </Card.Content>
           <Card.Content extra>
             <a>
               <Icon name='trophy' />
               Get {props.event.value_proposition} 
               <br/>
               <Icon name='user' />
               {props.event.quantity} Volunteers needed
             </a>
           </Card.Content>
           <Card.Content extra>
           <NavLink to={`events/${props.event.id}`}>
            <h4>Comments</h4>
           </NavLink>
           </Card.Content>
           <Card.Content extra>
             <Button primary onClick={()=>props.volunteerClickHandler(props)}>
               Volunteer
             </Button>
           </Card.Content>
       </Card>
      </Grid.Column> 
    </div>
  );
}

export default EventCard;