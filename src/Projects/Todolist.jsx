import React, { useEffect, useMemo, useState } from 'react'

const Todolist = () => {
  const [task,setTask]=useState('');
  const [complete,setComplete]=useState(false)
  const [filter,setFilter]=useState('ALL')
  const[todos,setTodos]=useState(()=>{
    const saved=JSON.parse(localStorage.getItem('Todos'));
    return saved||[
    {Task:'4 tweets',Completed:false},
    {Task:'Learn jS',Completed:false}
]})
const handleTodo=(task,complete)=>{
  setTodos([...todos,{Task:task,Completed:complete}])
  setTask('');
  setComplete(false);
}
const FilterTodos=useMemo(()=>{
  return todos.filter((todo)=>{
    if(filter==='Completed') return todo.Completed;
    if(filter==='Pending') return !todo.Completed;
    return true;

  });
},[todos,filter])

useEffect(()=>{
  localStorage.setItem("Todos",JSON.stringify(todos))
},[todos])
  return (
    <div>
      
      <input type='text' value={task} placeholder='Enter Todo' onChange={(e)=>setTask(e.target.value)}/>
      <input type='checkbox' checked={complete} onChange={()=>setComplete(t=>!t)}/>
      <button onClick={()=>handleTodo(task,complete)}>Submit</button>
      <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
       <option value="All">All</option>
       <option value="Completed">Completed</option>
       <option value="Pending">Pending</option>
      </select>
      <ul>
        {FilterTodos.map((todo)=>(
          <li key={Math.random()} className='flex gap-3'>
            <h1>{todo.Task}</h1>
             <p>{todo.Completed ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Todolist
