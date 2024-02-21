import React from 'react'
import { useGetSingleWorkoutQuery } from '../api/fetching'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleWorkoutExercise = () => {
  const {workout_id} = useParams();

  const { data = {} } = useGetSingleWorkoutQuery(workout_id);
  console.log(data)
  
  return (
    <div className='row row-cols-sm-1 row-cols-md-4 g-4'> 
      <div key={data.workout_id} className='col-6 col-lg-6 p-2'>
        <div className='card border-2 h-100'>
          <h2 className='card-title text-center'>{data.workout_name}</h2>
          <p className='card-body text-center py-6'>Description: <span className='lead card-subtitle'>{data.workout_description}</span></p>
          <>
          {data.exercises.map((exercises) => (
            <div key={exercises.exercise_id}>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <p>{exercises.name}</p>
                        <button className='btn btn-outline-dark m-2'><Link className= 'nav-link' to={`exercises/${exercises.exercise_id}`}>See More</Link></button>
                    </li>
                </ul>
            </div>
          ))}
          </>
          <button className='btn btn-outline-dark' type='button' role='button'><Link className='nav-link' to='/workouts'>Return to All Workouts</Link></button>
          <button className='btn btn-outline-dark' type='button' role='button'><Link className='nav-link' to='/account'>Return to Account</Link></button>
        </div>
      </div>
    </div>
  )
}

export default SingleWorkoutExercise