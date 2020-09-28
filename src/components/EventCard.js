import React from 'react';
import { Card, Icon, Image, Grid , Button, Popup, Rating} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import CreateEventForm from './CreateEventForm';

function EventCard(props) {

// let myEventsId = props.user.my_attendances.map((event)=>event.id)
// let alleventsId = props.allEvents.map((event)=>event.id)
// console.log(myEventsId)
  return (

    <div >
      <Popup
      trigger={
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
            <h4>Check the event comments</h4>
           </NavLink>
           </Card.Content>
           <Card.Content extra>
             <Button primary onClick={()=>props.volunteerClickHandler(props)}>
               Volunteer
             </Button> 
            
           </Card.Content>
       </Card>

 
      </Grid.Column >
      }>
      
      <Popup.Header>Rating</Popup.Header>
      <Popup.Content>
        <Rating icon='star' defaultRating={props.event.attendances[0].rating} maxRating={5} />
      </Popup.Content>
    </Popup>


    </div>
  );
}

export default EventCard;