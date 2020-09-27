import React from 'react'
import {Route, Switch} from 'react-router-dom'
import EventCard from '../components/EventCard'
import EventCardD from '../components/EventCardD'
import SearchForm from '../components/SearchForm'
import CommentContainer from './CommentContainer'
import {Grid} from 'semantic-ui-react'
import '../CommentContainer.css'

 
class AllEventContainer extends React.Component {


   state={
      allComments:[]
   }

   componentDidMount(){
      fetch('http://localhost:3000/comments')
      .then(resp=>resp.json())
      .then(data=> this.setState({allComments:data},  ()=>console.log(this.state.allComments)))
   }

   submitCommentHandler=(e, eventId)=>{

      let date = new Date().toLocaleDateString()
      let newDate = date.replace(/\//g, '-').split("-").reverse().join("-")
      // let result = newDate.split('-').reverse().join('');
      // var result = newDate.split("-").reverse().join("-")

      // console.log("result",result)
      // console.log("newDate", newDate)

      // console.log(e)
      
      let body={
          comment:e.comment,
          user_id: this.props.user.id,
          event_id: eventId ,
          date: newDate
      }
      let newComments=[...this.state.allEvents, body]
      let newArray = newComments.push(body)
      this.setState({allComments:newArray})

      // let event = newEvent.find((event)=> event.id === eventId)

      // let eventArray = event.comments.push(e.newComment)

      // console.log(event.comments)

      // let newArray = [...this.state.user.comments, e.newComment]
      // let commentArray = [...this.state.allEvents, e.newComment]
      // let newEvent = Object.assign({}, this.state.allEvents);
      // newEvent.comments = newArray;

      // this.setState({user: newUser});
      // this.setState({allEvents:commentArray})


      // const options = {
      //     method: "POST",
      //     headers: {
      //         "content-type": "application/json",
      //         "accept": "application/json",
      //         Authorization: `Bearer ${this.state.token}`
      //     },
      //     // note: Changed this line below to {key:value}
      //     body: JSON.stringify({comment: body})
      // }
      // fetch("http://localhost:3000/comments", options)
      //     .then(res => res.json())
      //     .then(console.log)
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
       console.log(this.state.allComments)
        
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
             submitCommentHandler={this.submitCommentHandler}
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
                           <Grid columns={3}>
                           <Grid.Row>
                            {this.renderAllEvents()}
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