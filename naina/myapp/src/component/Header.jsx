import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='header'>
        
     
     <NavLink to="/">home</NavLink>
     <ul>
     <li>   
    <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>about</NavLink></li>
    <li>
    <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>contact</NavLink>
</li>
<li> <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>login</NavLink></li>
<li> <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>register</NavLink></li>
</ul>
    
    </div>
    </>
  )
}

export default Header