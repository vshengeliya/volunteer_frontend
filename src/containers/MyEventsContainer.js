import React from 'react'
import MyVolunteerEvents from './MyVolunteerEvents'
import MyCreatedEvents from './MyCreatedEvents'
import { Tab } from 'semantic-ui-react'
import CreateEventForm from '../components/CreateEventForm'

 
class MyEventsContainer extends React.Component {

  

render() {
  // console.log(this.state.myVolunteerEvents)
    const panes =[
      { menuItem:'Events I volunteer', render: () => <Tab.Pane>
        
         <MyVolunteerEvents
        />
      </Tab.Pane> },
      { menuItem: 'My Created Events', render: () => <Tab.Pane>
        <MyCreatedEvents
        />
        </Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane>
      
      </Tab.Pane> },
    ]
      
    return (
      <>
        <h2>My events Container</h2>
        <Tab panes={panes} />
        {/* <MyCreatedEvents/> */}
       
        {/* <UserContainer/> */}
     </>
    )
  }
}
 
export default MyEventsContainer;