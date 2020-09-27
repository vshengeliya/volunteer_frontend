import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class Comments extends React.Component {

    render(){

     let comments = this.props.allComments.filter((comment=> comment.event_id === this.props.id ))
     let comment = comments.find((comment=>comment.comment===this.props.comment.comment))
     let name =  comment.user.first_name
     let image = comment.user.image

     console.log(this.props.allComments)

    return (
    
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src={image} />
                  <Comment.Content>
                    <Comment.Author as='a'>{name}</Comment.Author>
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