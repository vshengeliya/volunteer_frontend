import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class CreateEventForm extends React.Component{

    render(){



        return(
            <Form widths={'equal'} >
            
                
              <Form.Field width={4} >
                <label>Event Name</label>
                <input placeholder='Event Name' />
              </Form.Field>
                
              <Form.Field width={4}>
                <label>Value Proposition</label>
                <input placeholder='Value Proposition' />
              </Form.Field>
                
              <Form.Field width={4}>
                <label>How many people needed</label>
                <input placeholder='quantity' />
              </Form.Field>
                
              <Form.Field width={4}>
                <label>Image</label>
                <input placeholder='Image Link' />
              </Form.Field>
                
              <Form.Field width={4}>
                <label>Details of Event</label>
                <input placeholder='example `09-30-2020`' />
              </Form.Field>
                
              <Form.Field width={4}>
                <label>Date of the Event</label>
                <input placeholder='Date of the Event' />
              </Form.Field>
                
              <Form.Field width={4}>
                <label>City</label>
                <input  placeholder='City' />
                </Form.Field>
                
                <Form.Field width={4}>
                <label>  State</label>
                <input placeholder='State' />
              </Form.Field>
                
       
      <Button type='submit'>Submit</Button>
    </Form>

        )
    }
}



  export default CreateEventForm