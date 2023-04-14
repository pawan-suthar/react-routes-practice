import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import "../index.css"

const Students = () => {
  return (
    <div className='na'> 
        <input type='search' placeholder='sech students'/>
        <nav>
            <Link to="old">old students</Link>
            <Link to="new">new students</Link>
        </nav>
        {/* but nested routes doent know where to render so we use outlet */}
        <Outlet/>
      
    </div>
  )
}

export default Students
