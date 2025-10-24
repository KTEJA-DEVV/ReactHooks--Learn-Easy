import React, { useMemo, useState } from 'react'

const ExUseMemo = () => {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0)
  const cubeNum = (num) => {
    console.log("! calculation done ")
    return Math.pow(num, 3)
  }
  const result = useMemo(() => cubeNum(value), [value])
  /*const result=cubeNum(value) here if we use don't use useMemo
   the cubeNum function will run every time the state is changed 
   wether it is value or counter by giving the dependency if value 
   changes then only the function will run */
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <h1>Cube of number {value} is:{result}</h1>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
      <p>Count:{counter}</p>
    </div>
  )
}

export default ExUseMemo
