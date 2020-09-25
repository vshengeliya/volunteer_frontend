import React from 'react'
import Comments from  '../components/Comments'
import { Button, Form, Header } from 'semantic-ui-react'
import '../CommentContainer.css'

class CommentContainer extends React.Component{


    state={
        newComment:''
    }

    renderComments=()=>{
        return this.props.event.comments.map(comment=> 
        <Comments key={comment.id} comment={comment}/>
        )
    }

    onChangeHandler=(e)=>{
        // console.log (e)

        this.setState({[e.target.name]: e.target.value})
      }

    render() {

        return(
            <div className='comment-block'>
                <br/>
                 <Header as='h3' dividing>Comments </Header>
                 {this.renderComments()}

                 <Form reply onSubmit={(e)=>
                { e.preventDefault()
                 this.props.submitCommentHandler(this.state, this.props.id)
                 }}
                 >
                     
                     <Form.TextArea value={this.state.value} name='newComment' onChange={this.onChangeHandler} />
                     <Button content='Add Reply' labelPosition='left' icon='edit' primary 
                     />
                    </Form>
            </div>
        )
    }
}

export default CommentContainer