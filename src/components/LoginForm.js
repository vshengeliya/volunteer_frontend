import React from 'react'


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
            <div>
                <div className="login-form-wrapper">
                    <h3>Login</h3>
                    <form onSubmit={this.submitHandler} className="new-user-container">
                        <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler}/>
                        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onChangeHandler}/>
                        <br />
                        <div>{this.state.errorStatus}</div>
                        <input type="submit" value="login" className="login-form-submit" />
                    </form>
                    <div id="create-account-link"><a href="./create-account">Create Account</a></div>
                </div>

            </div>
        )
    }

}

export default LoginForm