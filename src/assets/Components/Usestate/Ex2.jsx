//useState with objects
import React, { useState } from 'react'

const Ex2 = () => {
  const [movies,setMovies]=useState([
    {
      name:'Salar',
      Rating:8.3,
      hero:'Prabhas'
    },
    {
      name:'KGF',
      Rating:9.3,
      hero:'Yash'
    },
    {
      name:'Kantara',
      Rating:9.5,
      hero:'Rishab Shetty'
    }
  ])
  const AddMovie=()=>{
    setMovies([...movies,{
      name:'Jersy',
      Rating:9.8,
      hero:'Nani'
    }])
  }
  const Removemovie=()=>{
    setMovies(movies.filter(movie=>movie.name!=='Salar'))
  }
  const updateMovie=()=>{
    setMovies(movies.map(movie=>movie.name==='Kantara'?{...movie,Rating:10}:movie))
  }
  return (
    <div>
      <ul>
        {movies.map(movie=>(
          <li key={movie.Rating}>
            <h1 className='font-bold'>{movie.name}</h1>
            <p>({movie.hero})</p>
            <p>Rating:{movie.Rating}</p>
          </li>
        ))}
      </ul>
      <button onClick={AddMovie} className='bg-green-100'>Add Movie Movie</button>
      <button onClick={Removemovie} className='bg-red-100'>Remove movie</button>
      <button onClick={updateMovie} className='bg-amber-100'> Update Movie</button>
    </div>
  )
}

export default Ex2
