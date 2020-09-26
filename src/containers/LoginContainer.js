import React from "react"
import LoginForm from "../components/LoginForm";

class LoginContainer extends React.Component {

    loginHandler = (userInfo) => {
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",

            },
            body: JSON.stringify({ user: userInfo })
        }).then(resp => resp.json())
            .then(data => {
                this.props.setUserState(data)
                localStorage.setItem("token", data.jwt)
            })
    }

    logOutHelper = () => {
        let state = "logout"
        this.props.setUserState(state)
        localStorage.clear("token")
    }

    render() {
        console.log(this.props.user)
        return(
            <div>
                {this.props.user ?
                    <>
                        <div className="user-container"><h3>Welcome Back {this.props.user.first_name}!</h3>
                            <h5>Your Email: {this.props.user.email}</h5>
                            <h5>Your location: {this.props.user.city}, {this.props.user.state}</h5>
                                <button id="logout" onClick={this.logOutHelper}>Logout</button>
                            </div>
                            
                            
                        </>

                    :
                    <LoginForm loginHandler={this.loginHandler}/>}
            </div>
        )
    }
}

export default LoginContainer