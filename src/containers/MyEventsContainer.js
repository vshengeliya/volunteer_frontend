import React from 'react'
import MyVolunteerEvents from './MyVolunteerEvents'
import MyCreatedEvents from './MyCreatedEvents'
import { Tab } from 'semantic-ui-react'
import UserProfileContainer from './UserProfileContainer'
import UserProfileForm from '../components/UserProfileForm'

 
class MyEventsContainer extends React.Component {

// user Auth later!!!
    state={
      myUser: [],
      userForm: false
    }

    componentDidMount(){
      fetch("http://localhost:3000/api/v1/users")
      .then(resp=> resp.json())
      .then(data=> this.setState({myUser:data[1]}))///change USER ID
    }

    userHandler=(obj)=>{

     this.setState({userForm:true}) 

     console.log(obj.myUser)
    // let options = {
    //   method: "PATCH",
    //   headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //       //, Authorization: `Bearer ${this.state.token}`
    //   },
    //   //change user when have a auth!!!
    //   body: JSON.stringify(body) //!!!!!!!!!!!change USER ID
    //  }  
  // fetch("http://localhost:3000/users/23", options)////!!change USER ID
  }

   submitUserFormHandler=(e)=>{

    console.log(e)
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
              //, Authorization: `Bearer ${this.state.token}`
          },
          //change user when have a auth!!!
          body: JSON.stringify(body) //!!!!!!!!!!!change USER ID
         }  
      fetch("http://localhost:3000/api/v1/users/23", options)////!!change USER ID
   }

render() {
    const panes =[
      { menuItem:'Events I volunteer', render: () => <Tab.Pane>
        
         <MyVolunteerEvents
        />
      </Tab.Pane> },
      { menuItem: 'My Created Events', render: () => <Tab.Pane>
        <MyCreatedEvents
        />
        </Tab.Pane> }
    ]
      
    return (
      <>

      {this.state.userForm === true?
      <>
        <UserProfileContainer myUser={this.state.myUser} userHandler={this.userHandler}/>
        <UserProfileForm myUser={this.state.myUser} submitUserFormHandler={this.submitUserFormHandler}/> 
      </> :
      <>
        <UserProfileContainer myUser={this.state.myUser} userHandler={this.userHandler}/>
        <Tab panes={panes} />
      </>
    
    
    }
       
     </>
    )
  }
}
 
export default MyEventsContainer;