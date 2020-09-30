import React from "react"
import LoginForm from "../components/LoginForm";
import { List } from 'semantic-ui-react'

import styled from 'styled-components'

class LoginContainer extends React.Component {


  

    render() {

    const LoginFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

        return(
            <div>{
                    this.props.token ?
                    <>
                    <LoginFormWrapper>

                        <div className="user-container" ><h3>Welcome Back!</h3>
                             <List size={'medium'} verticalAlign={'bottom'}>
                                <List.Item>
                                  <List.Icon name='users' />
                                    <List.Content>{this.props.user.first_name} {this.props.user.last_name}</List.Content>
                                </List.Item>
                                <List.Item>
                                  <List.Icon name='marker' />
                                  <List.Content>{this.props.user.city}, {this.props.user.state}</List.Content>
                                </List.Item>
                                <List.Item>
                                  <List.Icon name='mail' />
                                  <List.Content>
                                    <a href="mailto:">{this.props.user.email}</a>
                                  </List.Content>
                                </List.Item>
                                <List.Item>
                                  <List.Icon name='linkify' />
                                  <List.Content>
                                    <a href='https://github.com/vshengeliya'>https://github.com/vshengeliya</a>
                                  </List.Content>
                                </List.Item>
                                    </List>
                                <button id="logout" onClick={this.props.logOutHelper}>Logout</button>
                            </div>
                    </LoginFormWrapper>
                            
                            
                        </>

                    :
                    <LoginForm loginHandler={this.props.loginHandler}/>}
               
            </div>
        )
    }
}

export default LoginContainer