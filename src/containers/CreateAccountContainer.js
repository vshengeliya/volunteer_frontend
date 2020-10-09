import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

const usersUrl = "http://localhost:3000/api/v1/users/"

class CreatAccountContainer extends React.Component{

    submitHandler = (obj) => {


        const data = {
            user: {
                username: obj.username,
                password: obj.password,
                first_name: obj.first_name,
                last_name: obj.last_name,
                email: obj.email,
                city: obj.city,
                state: obj.state,
                image: obj.image
            }
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(usersUrl, options)
            .then(res => res.json())
            .then(console.log)
    }

    render(){
        
        return(
                <CreateAccountForm submitHandler={this.submitHandler}/>
        
        )
    }
}

export default CreatAccountContainer