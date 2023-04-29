import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {SiAskfm} from 'react-icons/si'
import { SlUser} from "react-icons/sl";
import { BiArchive } from "react-icons/bi";

function Nav() {
  return (
    <div className='row'>
      <div className='row'>
        <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper_logo_website_header_85x.png?v=1618292350" alt="" />
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/shop'><h1>Shop</h1></Link>
        <Link to='./contact'><h1>Contact</h1></Link>
        <Link to='./about'><h1>About Us </h1></Link>
  

      </div>
      <div className='row'>
          <Link to='./login'><SlUser className='icon'/></Link>
          <Link to='/cart'><BiArchive className='icon'/></Link>
      </div>

    </div>
  )
}

export default Nav
