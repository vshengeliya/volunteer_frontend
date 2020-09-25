import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class Comments extends React.Component {

    render(){
    console.log(this.props.comment)
    return (

    

              <Comment.Group>
                <Comment>
                  <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                      <div>{this.props.comment.date}</div>
                    </Comment.Metadata>
                      <Comment.Text>{this.props.comment.comment}</Comment.Text>
                  
                  </Comment.Content>
                </Comment>
            </Comment.Group>            
            )           
    }   
}

export default Comments