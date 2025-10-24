import React, { useCallback, useState } from 'react'
import Header from './Header'

const UCex1 = () => {
  const [count,setCount]=useState(0)
  const newFn=useCallback(()=>{},[])
  return (
    <div>
      <Header newFn={newFn}/> 
      
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Icrement</button>
    </div>
  )
}
/* here in Header we provide a function as prop so we need to useCallback 
 to prevent unwanted re-renders of header if the count changes the header will
 re-render as you can see in the console it prints Header rendered so we use 
 usecallback to caching useCall back will store the function if the 
 function is same it will provide old fn if we give dependency as count 
 it will change when the count value changes */
export default UCex1
