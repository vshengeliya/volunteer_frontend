import React from 'react'
import {Form, Button} from "semantic-ui-react";
import styled from 'styled-components'

const LoginFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'username'){
            this.setState({
                username: e.target.value
            })

        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault()

        if (this.state.username.length === 0) {
            this.setState({
                errorStatus: "Username cannot be blank"
            })
        } else if (this.state.password.length === 0) {
            this.setState({
                errorStatus: "Password cannot be blank"
            })
        } else {
            this.props.loginHandler(this.state)
        }

    }
    
    render() {
       
        return(

            <LoginFormWrapper id='login-form-wrapper'>
                <div>
                    <h3>Please Log In to Volunteer</h3>
                    <Form onSubmit={this.submitHandler} className="new-user-container" ><a href="./login"></a>
                    <Form.Field>
                        <input name="username" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandler}/>
                    </Form.Field>

                        <div>{this.state.errorStatus}</div>
                        <Button primary type="submit" value="login">Sign in</Button>
                    </Form>
                    <br/>
                    <div id="create-account-link"><a href="./create-account">Not a user? Create Account</a></div>
                </div>

            </LoginFormWrapper>
        )
    }
}

export default LoginForm