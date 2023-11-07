import React from 'react'
import "./styles.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
        <NavLink to="/" ><h3>Home</h3></NavLink>
        {/* <NavLink to="/signup" ><h3>Signup</h3></NavLink>
        <NavLink to="/login" ><h3>Login</h3></NavLink> */}
        <NavLink to="/product" ><h3>Products</h3></NavLink>
      
    </div>
  )
}

export default Header;