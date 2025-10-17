import React, { useState } from 'react'

const LearnUseState = () => {
  const [count,setCount]=useState(0)
  const handleIncrement=()=>{
    setCount(count+1)
  }
  const handleDecrement=()=>{
    setCount(count-1)
  }
  return (
    <div className='bg-blue-100 justify-center items-center h-screen w-full flex flex-col'>
   <h1 className='text-5xl'>{count}</h1>
   <div className='gap-3 flex mt-5'>
    <button className='bg-green-200  rounded px-5 py-2 text-center text-2xl' onClick={handleIncrement}>+</button>
    <button className='bg-red-200  rounded px-5 py-2 text-center text-2xl' onClick={handleDecrement}>-</button>
   </div>
    </div>
  )
}

export default LearnUseState
