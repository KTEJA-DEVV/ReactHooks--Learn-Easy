import React, { useEffect, useState } from 'react'

const LearnuseEffect = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <ul>
        {users.map(u=>
          <li key={Math.random()}>{u.name}</li>
        )}
      </ul>
    </div>
  )
}

export default LearnuseEffect
