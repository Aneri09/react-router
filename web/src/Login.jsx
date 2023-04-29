import React from 'react'
import Nav from './Components/Nav'

function Login() {
  return (
    <div>
        
        <Nav/>

     <div className="box">
            <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper_logo_website_header_85x.png?v=1618292350" alt="" />
        <h1>Log in </h1>
     <input type="text" placeholder='Enter Your name' />
     <input type="email" placeholder='Enter Your Email' />
     <input type="password" placeholder='Enter Your Password' />
     <input type="submit" />
     </div>

    </div>
  )
}

export default Login