import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {usrid} = useParams()
    
  return (
    <div>
        <h1>details about user {usrid}  </h1>
      
    </div>
  )
}

export default UserDetails
