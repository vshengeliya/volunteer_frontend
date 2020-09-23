import React from 'react'
import {Item, Button } from 'semantic-ui-react'

function UserProfileContainer (props){

    return (
       props.updatedUserInfo === null?

        <Item.Group>
        <Item>
           <Item.Image size='tiny' src={props.user.image} />
           <Item.Content>
             <Item.Header as='a'>{props.user.first_name} {props.user.last_name}</Item.Header>
             <Item.Meta>{props.user.city}, {props.user.state}</Item.Meta>
             <Item.Extra>{props.user.email}</Item.Extra>
            <Item.Extra><Button onClick={()=>props.userHandler(props)}color={'facebook'}>Manage profile</Button></Item.Extra>
           </Item.Content>
          
        </Item>
      </Item.Group>:

      <Item.Group>
      <Item>
         <Item.Image size='tiny' src={props.updatedUserInfo.image} />
         <Item.Content>
           <Item.Header as='a'>{props.updatedUserInfo.firstName} {props.updatedUserInfo.lastName}</Item.Header>
           <Item.Meta>{props.updatedUserInfo.city}, {props.user.state}</Item.Meta>
           <Item.Extra>{props.updatedUserInfo.email}</Item.Extra>
          <Item.Extra><Button onClick={()=>props.userHandler(props)}color={'facebook'}>Manage profile</Button></Item.Extra>
         </Item.Content>

      </Item>
      </Item.Group>
    )   
}

export default UserProfileContainer