//Updating dom element using useEffect
import React, { useEffect, useState } from 'react'

const ExE1 = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    document.title=count;
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
      <button onClick={()=>setCount((prev)=>prev-1)}>-</button>
    </div>
  )
}

export default ExE1
