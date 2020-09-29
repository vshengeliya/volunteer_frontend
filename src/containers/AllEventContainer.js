import React from 'react'
import {Route, Switch} from 'react-router-dom'
import EventCard from '../components/EventCard'
import SearchForm from '../components/SearchForm'
import CommentContainer from './CommentContainer'
import {Grid} from 'semantic-ui-react'
import '../CommentContainer.css'
import "../Search.css"

 
class AllEventContainer extends React.Component {

   state={
      allComments:[]
   }

   componentDidMount(){
      fetch('http://localhost:3000/comments')
      .then(resp=>resp.json())
      .then(data=> this.setState({allComments:data}))
   }

   // componentDidUpdate(prevProps, prevState) {
   //    if (prevProps.allComments !== this.state.allComments) {
   //      console.log('comment state has changed.')
   //    }
   //  }


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

    componentDidUpdate(prevProps){
       if(this.props.allEvents !==prevProps.allEvents){
         console.log("if componentDidUpdate", prevProps)
          fetch("http://localhost:3000/comments")
          .then(resp=>resp.json())
          .then(data=>this.setState({...this.state, allComments:data}))
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
             <EventCard
               key={foundEvent.id}
               event={foundEvent}
               volunteerClickHandler={this.props.volunteerClickHandler}
               volunteerButtonToggle={this.props.volunteerButtonToggle}
               volunteeredCard={this.props.volunteeredCard}
               user={this.props.user}
               allEvents={this.props.allEvents}
               />
               
             <CommentContainer
             event={foundEvent}
             id={id}
             submitCommentHandler={this.props.submitCommentHandler}
             allComments={this.state.allComments}
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
                           <Grid>
                           <Grid.Row stretched={'bool'}>
                              <div class="wrapper">
                            {this.renderAllEvents()}
                              </div>
                            </Grid.Row>
                           </Grid >
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