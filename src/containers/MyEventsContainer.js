import React from 'react'
import MyVolunteerEvents from './MyVolunteerEvents'
import MyCreatedEvents from './MyCreatedEvents'
import { Tab } from 'semantic-ui-react'
import UserProfileContainer from './UserProfileContainer'
import UserProfileForm from '../components/UserProfileForm'

 
class MyEventsContainer extends React.Component {

    state={
      userForm: false,
      updatedUserInfo: null
    }

    userHandler=(obj)=>{

     this.setState({userForm:true}) 
    }
    
    submitUserFormHandler=(e)=>{
      // console.log(e)
    this.setState({updatedUserInfo: e })
    this.setState({userForm:false}) 


    let body = {
      first_name: e.firstName,
      last_name: e.lastName,
      email: e.email,
      image: e.image,
      city: e.city,
      state: e.state
    }
     let options = {
          method: "PATCH",
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              , Authorization: `Bearer ${this.state.token}`
          },
          body: JSON.stringify(body) 
         }  
      fetch("http://localhost:3000/api/v1/users/" + this.props.user.id, options)
   }

render() {

  console.log("updated User", this.state.updatedUserInfo)
    const panes =[
      { menuItem:'Events I volunteer', render: () => <Tab.Pane>
        
         <MyVolunteerEvents
         user={this.props.user} token={this.props.token}
        />
      </Tab.Pane> },
      { menuItem: 'My Created Events', render: () => <Tab.Pane>
        <MyCreatedEvents
        user={this.props.user} token={this.props.token}
        />
        </Tab.Pane> }
    ]
      
    return (
      <>

      {this.state.userForm === true?
      <>
        <UserProfileContainer updatedUserInfo={this.state.updatedUserInfo} userHandler={this.userHandler} user={this.props.user} token={this.props.token}/>
        <UserProfileForm submitUserFormHandler={this.submitUserFormHandler} user={this.props.user} token={this.props.token}/> 
      </> :
      <>
        <UserProfileContainer updatedUserInfo={this.state.updatedUserInfo} userHandler={this.userHandler} user={this.props.user} token={this.props.token}/>
        <Tab panes={panes} />
      </>
    }
       
     </>
    )
  }
}
 
export default MyEventsContainer;