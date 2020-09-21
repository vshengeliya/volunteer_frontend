import React from 'react'

import EventCard from '../components/EventCard'
import SearchForm from '../components/SearchForm'

 
class AllEventContainer extends React.Component {

    renderAllEvents=()=>{

      if (this.props.searchNameValue === ""){

         return this.props.filteredByCityEvents.map ((event)=> 
         <EventCard event={event}
         volunteerClickHandler={this.props.volunteerClickHandler}
         />)
      } else {
         return this.props.filteredByNameEvents.map ((event)=> 
         <EventCard event={event}
         volunteerClickHandler={this.props.volunteerClickHandler}
         />) 
      }
    }

    render() {
        
    return (
        <>
        <SearchForm 
        searchNameValue={this.props.searchNameValue} 
        searchByNameHandler={this.props.searchByNameHandler}
        searchCityValue={this.props.searchCityValue} 
        searchByCityHandler={this.props.searchByCityHandler}
        allEvents={this.props.allEvents}
        />
     {this.renderAllEvents()}
     </>
    )
  }
}
 
export default AllEventContainer;