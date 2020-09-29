import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class Comments extends React.Component {

    render(){
      console.log('all', this.props.allComments)

     let comments = this.props.allComments.filter((comment=> comment.event_id === this.props.id ))
     let comment = comments.find((comment=>comment.comment===this.props.comment.comment))
     let name = comment && comment.user?  comment.user.first_name : "pending"
     let image = comment && comment.user?  comment.user.image : "pending"

    return (
    
      this.props.allComments.length === 0? <h2>Loading events</h2>:
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src={image} />
                  <Comment.Content>
                    <Comment.Author as='a'>{name}</Comment.Author>
                    <Comment.Metadata>
                      <div>@{this.props.comment.date}</div>
                    </Comment.Metadata>
                      <Comment.Text>{this.props.comment.comment}</Comment.Text>
                  
                  </Comment.Content>
                </Comment>
            </Comment.Group>            
            )           
    }   
}

export default Comments