import React, { useEffect, useRef, useState } from 'react'


const ExR1 = () => {
  const [value,setValue]=useState(0);
  const count=useRef(0) // if we useState here inside useEffect when component count renders it will re-renders 
  useEffect(()=>{
  count.current=count.current+1
  })
  return (
    <div>
      
 <h1>{value}</h1>
 <button onClick={()=>setValue(count=>count+1)}>+</button>
 <button onClick={()=>setValue(count=>count-1)}>-</button>

 <p >Rerenders:{count.current}</p>

    </div>
  )
}

export default ExR1
