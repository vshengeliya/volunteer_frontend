import React from 'react'
import { Button, Form} from 'semantic-ui-react'

class UserProfileForm extends React.Component{

    
    state={
        
        firstName: this.props.user.first_name,
        lastName: this.props.user.last_name, 
        email: this.props.user.email,
        image: this.props.user.image,
        city: this.props.user.city,
        state: this.props.user.state
    }
    
    changeHandler=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    render(){
        // console.log("user profile container", this.props.myUser)

        return(
          <Form onSubmit={

              (e)=>{
                  e.preventDefault()
                  this.props.submitUserFormHandler(this.state)
    
              }
          }>

            <Form.Field width={4}>
            <label>First Name</label>
            <input placeholder='Enter updated first name' name='firstName' value={this.state.firstName} onChange={this.changeHandler}/>
          </Form.Field>

          <Form.Field width={4}>
            <label>Last Name</label>
            <input placeholder='Enter updated last name' name='lastName' value={this.state.lastName} onChange={this.changeHandler}/>
          </Form.Field>

          <Form.Field width={4}>
            <label>Email</label>
            <input placeholder='Enter updated email' name='email' value={this.state.email} onChange={this.changeHandler}/>
          </Form.Field>

          <Form.Field width={4}>
            <label>Image</label>
            <input placeholder='Image Link' name='image' value={this.state.image} onChange={this.changeHandler}/>
          </Form.Field>

          <Form.Field width={4}>
            <label>City</label>
            <input  placeholder='Enter updated city' name='city' value={this.state.city} onChange={this.changeHandler}/>
            </Form.Field>

            <Form.Field width={4}>
            <label>  State</label>
            <input placeholder='Enter updated state' name='state' value={this.state.state} onChange={this.changeHandler}/>
            </Form.Field>

            <Button type='submit'>Submit Changes</Button>

          </Form>
        )
    }
}

export default UserProfileForm