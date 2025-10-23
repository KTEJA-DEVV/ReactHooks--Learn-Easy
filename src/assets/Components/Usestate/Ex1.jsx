//Example with Array
import React, { useState } from 'react'

const Ex1 = () => {
  const[friends,setFriends]=useState(['rahul','adi'])
  const addfriend=()=>{
    setFriends([...friends,'Sridar'])
  }
  const removefriend=()=>{
    setFriends(friends.filter(f=>f!=='adi'))
  }
  const updatefriend=()=>{
    setFriends(friends.map(f=>f==='adi'?'Adithya':f))
  }
  return (
    <div>
      <ul>
      {friends.map(f=>(
        <li key={Math.random()}>{f}</li>
      ))}
      </ul>
      <button className='bg-green-100' onClick={addfriend}>Add Friend</button>
      <button className='bg-red-100' onClick={removefriend}>Remove Friend</button>
      <button className='bg-amber-100' onClick={updatefriend}>Update Friend</button>

    </div>
  )
}

export default Ex1
