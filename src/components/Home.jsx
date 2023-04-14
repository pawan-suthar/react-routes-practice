import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='na'>
        <h1> home component</h1>
        <button onClick={() => navigate('ordercmp')}>click to complete order</button>
      
    </div>
  )
}

export default Home
