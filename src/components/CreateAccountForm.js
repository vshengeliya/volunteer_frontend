import React from "react"
import { Button, Form} from 'semantic-ui-react'


class CreateAccountForm extends React.Component {

    state = {
        verification_status: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        state: '',
        image: ''
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]: e.target.value})
      }

    formVerification = (e) => {
        if (this.state.password !== this.state.verify_password) {
            this.setState({
                verification_status: "Passwords do not match"
            })
            this.changeHandler(e)

        } else {
            this.setState({
                verification_status: null
            })
            this.changeHandler(e)
        }
    }

    render() {

        return(
            <>

            <h3>Create a new User Account</h3>
            <Form widths={'equal'} 
            onSubmit={(e)=>{
              e.preventDefault()
                this.props.submitHandler(this.state)
                }}>
                 
            

            <Form.Field width={4} >
                <label>Username</label>
                <input placeholder='Username' name='username' value={this.state.username} onChange={this.changeHandler} />
              </Form.Field>

              <Form.Field width={4} >
                <label>Password</label>
                <input placeholder='Password' name='password' value={this.state.password} onChange={this.formVerification} />
              </Form.Field>

              <Form.Field width={4} >
                <label>Verify password</label>
                <input placeholder='Verify password' name='verify_password' value={this.state.verify_password} onChange={this.formVerification} />
              </Form.Field>

              <Form.Field width={4} >
                <label>First Name</label>
                <input placeholder='First name' name='firstName' value={this.state.firstName} onChange={this.changeHandler} />
              </Form.Field>

              <Form.Field width={4}>
                <label>Last Name</label>
                <input placeholder='Last name' name='lastName' value={this.state.lastName} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>Email</label>
                <input placeholder='Email' name='email' 
                  value={this.state.email} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>Image/ Photo</label>
                <input placeholder='Enter image link' name='image' value={this.state.image} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>City</label>
                <input placeholder='City' name='city' value={this.state.city} onChange={this.changeHandler}/>
              </Form.Field>

                <Form.Field width={4}>
                <label>  State</label>
                <input placeholder='State' name='state' value={this.state.state} onChange={this.changeHandler}/>
              </Form.Field>
            
                <Button type='submit'>Submit</Button>
             </Form>
          

             </>

        )
    }
}

export default CreateAccountForm