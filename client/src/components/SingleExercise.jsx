import React from 'react'
import { useGetSingleExerciseQuery } from '../api/fetching'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleExercise = () => {
  const {exercise_id} = useParams();

  const { data = {}, error, isLoading } = useGetSingleExerciseQuery(exercise_id);
  
  if(isLoading) {
    return <div>loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <div className='row justify-content-center row-cols-sm-1 row-cols-md-4 g-4'> 
      <div key={data.exercise_id} className='col-6 col-lg-6 p-2'>
        <div className='card border-2 h-100'>
          <img className='card-img-top' src={new URL(`../assets/images/${data.imgurl}`, import.meta.url).href} alt={data.name}></img>
          <h2 className='card-title text-center'>{data.name}</h2>
          <p className='card-body text-center py-6'><span className='lead card-subtitle'>{data.description}</span></p>
          <button className='btn btn-outline-dark' type='button' role='button'><Link className='nav-link' to='/workouts'>Return to Workouts</Link></button>
        </div>
      </div>
    </div>
  )
}

export default SingleExercise