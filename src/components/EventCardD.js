import React from 'react';
import { Card, Icon, Image, Grid , Button} from 'semantic-ui-react'


function EventCardD(props) {

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
             <Button negative onClick={()=>props.deleteEventClickHandler(props)}>Delete event</Button>
           </Card.Content>
       </Card>

 
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </div>
  );
}

export default EventCardD;