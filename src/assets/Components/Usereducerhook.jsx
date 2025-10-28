import React, { useReducer, useState } from 'react'

const Usereducerhook = () => {
  const initialState={count:0,name:'sai'}
  const [name,setName]=useState('')
  const reducer=(state,action)=>{
    switch (action.type) {
      case 'increment':
        return {...state,count:state.count+1}
      case 'decrement':
        return {...state,count:state.count-1}
      case 'Namechange':
        return {...state,name:action.payload}
      default:
        state;
    }
  }
  const[state,dispatch]=useReducer(reducer,initialState);
  const handleChange=()=>{
    dispatch({type:'Namechange',payload:name});
    setName('')
  }
  
  return (
    <div>
      <h1>{state.count}</h1>
      <h2>{state.name}</h2>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
      <button onClick={handleChange}>Namechange</button>
    </div>
  )
}

export default Usereducerhook
