import React, { useContext } from 'react';
import { AppContext } from './AppContext';


const Footer = () => {
  const {phone}=useContext(AppContext)
  return (
    <div>
      <h1>Footer</h1>
      <p>{phone}</p>
    </div>
  )
}

export default Footer
