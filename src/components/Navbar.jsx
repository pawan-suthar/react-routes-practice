import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
   <nav className='na'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/students">Students</Link>

   </nav>
  )
}

export default Navbar
