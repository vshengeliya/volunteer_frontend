import React from 'react'
import { Image, Item, Button } from 'semantic-ui-react'

function UserProfileContainer (props){
    return (


        <Item.Group>
        <Item>
          <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
    
          <Item.Content>
            <Item.Header as='a'>{props.user.first_name} {props.user.last_name}</Item.Header>
            <Item.Meta>{props.user.city}, {props.user.state}</Item.Meta>
            <Item.Description>
              <Image src={props.image} />
            </Item.Description>
            <Item.Extra>{props.user.email}</Item.Extra>
            <Item.Extra><Button onClick={()=>props.userHandler(props)}color={'facebook'}>Manage profile</Button></Item.Extra>
          </Item.Content>
          
        </Item>
      </Item.Group>
    )
        // <h3>User Profile</h3>
    
}

export default UserProfileContainer