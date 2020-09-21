import React from 'react'

import EventCard from '../components/EventCard'
import SearchForm from '../components/SearchForm'

 
class AllEventContainer extends React.Component {

    renderAllEvents=()=>{
       return this.props.allEvents.map ((event)=> 
       <EventCard event={event}
       volunteerClickHandler={this.props.volunteerClickHandler}
       />)
    }

    render() {
        
    return (
        <>
        <SearchForm searchValue={this.props.searchValue} 
        searchHandler={this.props.searchHandler}
        allEvents={this.props.allEvents}
        />
     {this.renderAllEvents()}
     </>
    )
  }
}
 
export default AllEventContainer;