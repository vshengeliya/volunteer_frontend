import React from 'react'
import { Button, Form} from 'semantic-ui-react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateEventForm extends React.Component{

    state={
        name: "",
        valueProposition: "", 
        eventType: "",
        quantity: "",
        image: "",
        details: "",
        date: "",
        city: "",
        state: ""
    }

    changeHandler=(e)=>{
      this.setState({[e.target.name]: e.target.value})
    }
    
      changeDateHandler=(e)=>{
        let date = e.toLocaleDateString()
        let newDate = date.replace(/\//g, '-')
        this.setState({date: newDate}) 
      }
      
    render(){

        return(
            <Form widths={'equal'} 
            onSubmit={(e)=>{
                e.preventDefault()
                this.props.submitFormHandler(this.state)
                }}>
            
              <Form.Field width={4} >
                <label>Event Name</label>
                <input placeholder='Event Name' name='name' value={this.state.name} onChange={this.changeHandler} />
              </Form.Field>

              <Form.Field width={4}>
                <label>Value Proposition</label>
                <input placeholder='Value Proposition' name='valueProposition' value={this.state.valueProposition} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>Event Type</label>
                <input placeholder='Event Type' name='eventType' 
                  value={this.state.eventType} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>How many people needed</label>
                <input placeholder='quantity' name='quantity' value={this.state.quantity} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>Image</label>
                <input placeholder='Image Link' name='image' value={this.state.image} onChange={this.changeHandler}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>Details of Event</label>
                <input placeholder='describe the event' name='details' value={this.state.details} onChange={this.changeHandler}/>
              </Form.Field>  

              <Form.Field width={4}>
                <label>Date of the Event</label>
                <DatePicker 
                minDate={new Date()}
                placeholder='choose date'
                onChange={this.changeDateHandler}
                value={this.state.date}/>
              </Form.Field>

              <Form.Field width={4}>
                <label>City</label>
                <input  placeholder='City' name='city' value={this.state.city} onChange={this.changeHandler}/>
                </Form.Field>

                <Form.Field width={4}>
                <label>  State</label>
                <input placeholder='State' name='state' value={this.state.state} onChange={this.changeHandler}/>
              </Form.Field>
                <Button type='submit'>Submit</Button>
             </Form>

        )
    }
}



  export default CreateEventForm