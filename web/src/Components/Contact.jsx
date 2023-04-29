
import React from 'react'
import Nav from './Nav'
import {Container, Input} from '@chakra-ui/react'

function Contact() {
  return (
    <div>  
        <Nav/>

      <h3>Contact Us</h3>

      <h6>Order Tracking & Adjustments</h6>

      <p>If you've placed an order and are looking for tracking information, or need to make a change to the details on your order, click here and follow the prompts to access real time order updates.If you've placed an order and are looking for tracking information, or need to make a change to the details on your order, click here and follow the prompts to access real time order updates.</p>

      <h6>Customer Support</h6>

      <p>If you've bought a product from Proper and it hasn't performed to expectations, or if you want to know more about the brand, send our support team a message./</p>

      <h6>Work with Proper</h6>

      <p>If you are looking to work with Proper on the commercialisation of a new product, or wish to discuss customisation options for our current range, please contact: workwithus@studioproper.com</p>

      {/* <h6>Press</h6> */}

    <Container>
      <input type="text" placeholder='First name' /><br/>
      <input type="text" placeholder='Last name' /><br/>
      <input type="submit" style={{background:"#61619f",color:"white",marginTop:"30px",marginBottom:"30px"}} />
      
    </Container>
    
    </div>
  )
}

export default Contact
