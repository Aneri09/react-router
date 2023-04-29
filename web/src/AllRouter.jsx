import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import Login from './Login'

function AllRouter() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {/* <Route path='/product-details/:id' element={<Productdetail/>}/> */}
           {/* <Route path='*' element={<Error/>}/>  */}
        </Routes>
    </div>
  )
}

export default AllRouter
