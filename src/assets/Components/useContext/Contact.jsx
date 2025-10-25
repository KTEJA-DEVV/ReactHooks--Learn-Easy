import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Contact = () => {
  const {phone,Name}=useContext(AppContext);
  
  return (
    <div>
      <h1>Contact</h1>
      <p>{phone}</p>
      <p>{Name}</p>
    </div>
  )
}

export default Contact
