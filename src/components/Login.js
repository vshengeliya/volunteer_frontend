import React from 'react'
import LoginForm from "./LoginForm";

class Login extends React.Component {

    state = {
        renderLogin: false,
        username: '',
        password: ''
    }

    toggleLoginForm = () => {
        this.setState({
            renderLogin: !this.state.renderLogin
        })
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'username') {
            this.setState({
                username: e.target.value
            })
        } else if (e.target.name === 'password') {
            this.setState({
                password: e.target.value
            })
        }
    }

    onSubmitHandler = () => {
        this.props.toggleUserLogin()
    }

    render() {
        return(
            <div>
                <div onClick={this.toggleLoginForm}>Login</div>
                {this.state.renderLogin ? <LoginForm onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/> : null }
            </div>
        )
    }

}

export default Login