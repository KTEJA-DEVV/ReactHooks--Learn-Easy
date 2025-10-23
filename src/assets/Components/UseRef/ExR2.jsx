import React, { useRef } from 'react'

const ExR2 = () => {
  const inputElem=useRef(null);
  const handleButton=()=>{
    
    inputElem.current.style.background='blue';
    console.log(inputElem.current)
  }
  return (
    <div>
      <input type='text' ref={inputElem}/>
      <button onClick={handleButton}>Click</button>
    </div>
  )
}

export default ExR2
