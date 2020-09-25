import React from 'react'
import Comments from  '../components/Comments'
import { Button, Form, Header } from 'semantic-ui-react'
import '../CommentContainer.css'

class CommentContainer extends React.Component{

    renderComments=()=>{
        return this.props.event.comments.map(comment=> 
        <Comments key={comment.id} comment={comment}/>
        )
    }
    render() {
        console.log('user', this.props.user)

        return(
            <div className='comment-block'>
                <br/>
                 <Header as='h3' dividing>Comments </Header>
                 {this.renderComments()}
                 <Form reply>
                     <Form.TextArea />
                     <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
            </div>
        )
    }
}

export default CommentContainer