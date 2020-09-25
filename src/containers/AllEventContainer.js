import React from 'react'
import {Route, Switch} from 'react-router-dom'
import EventCard from '../components/EventCard'
import EventCardD from '../components/EventCardD'
import SearchForm from '../components/SearchForm'
import CommentContainer from './CommentContainer'
import '../CommentContainer.css'

 
class AllEventContainer extends React.Component {


   state={
      users:[]
   }

   componentDidMount(){
      fetch('http://localhost:3000/api/v1/users')
      .then(resp=>resp.json())
      .then(console.log)
   }

    renderAllEvents=()=>{

      if (this.props.searchNameValue === ""){

         return this.props.filteredByCityEvents.map ((event)=> 
         <EventCard 
         key={event.id}
         event={event}
         volunteerClickHandler={this.props.volunteerClickHandler}
         volunteerButtonToggle={this.props.volunteerButtonToggle}
         volunteeredCard={this.props.volunteeredCard}
         user={this.props.user}
         allEvents={this.props.allEvents}
         />)
      } else {
         return this.props.filteredByNameEvents.map ((event)=> 
         <EventCard event={event}
         volunteerClickHandler={this.props.volunteerClickHandler}
         volunteerButtonToggle={this.props.volunteerButtonToggle}
         volunteeredCard={this.props.volunteeredCard}
         user={this.props.user}
         allEvents={this.props.allEvents}
         />) 
      }
    }


    


    render() {
        
    return (
       <>
       {this.props.allEvents.length === 0? <h2>Loading events</h2>:

       <>
        <Switch>
           <Route path ='/events/:id' render={({ match })=> {

             let id = parseInt(match.params.id)
             let foundEvent = this.props.allEvents.find((event)=> event.id===id)
             return (
             <div>
             <EventCard className='left'
               key={foundEvent.id}
               event={foundEvent}
               volunteerClickHandler={this.props.volunteerClickHandler}
               volunteerButtonToggle={this.props.volunteerButtonToggle}
               volunteeredCard={this.props.volunteeredCard}
               user={this.props.user}
               allEvents={this.props.allEvents}
               />
             <CommentContainer className ='right'
             event={foundEvent}
             id={id}
             submitCommentHandler={this.props.submitCommentHandler}
             />
             </div>
             )



           }}/>
           
             <Route path="/events" render={()=> {
             
                   return(
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
             }/>
        </Switch>
       </>
       }
     </>
    )
  }
}
 
export default AllEventContainer;