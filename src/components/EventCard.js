import React from 'react';
import { Card, Icon, Image, Grid , Button} from 'semantic-ui-react'

function EventCard(props) {

  // let result1 =  props.allEvents
  // let result2 = props.user.my_attendances
  // let result = result1.filter(o1 => result2.some(o2 => o1.id === o2.id))
  // let result = result1.filter(function (o1) {
  //   return result2.some(function (o2) {
  //       return o1.id === o2.id; // return the ones with equal id
  //  });
// });
  // console.log("result", result)

  return (
    <div>
        <Grid >
    <Grid.Row>
      <Grid.Column columns={3}>
        <Card>
           <Image src={props.event.image} wrapped ui={false} />
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
             {/* {props.user.events.includes((event => event.id === props.volunteeredCard.id))?
             <Button color={'gray'} onClick={()=>props.volunteerClickHandler(props)}>
               Volunteered
             </Button>:
             
             <Button primary onClick={()=>props.volunteerClickHandler(props)}>
               Volunteer
             </Button>
             } */}
             {/* <Button negative onClick={()=>props.deleteEventClickHandler(props)}>Delete event</Button> */}
             <Button primary onClick={()=>props.volunteerClickHandler(props)}>
               Volunteer
             </Button>
           </Card.Content>
       </Card>

 
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </div>
  );
}

export default EventCard;