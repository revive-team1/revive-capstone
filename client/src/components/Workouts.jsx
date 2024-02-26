import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetWorkoutsQuery } from '../api/fetching'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import FavoriteWorkoutExercisesButton from './FavoriteWorkoutExercisesButton'
import gymBackground from '../assets/gymBackground.png'

const Workouts = ({ user_id }) => {
    const token = useSelector((it) => it.actionsSlice.token)
    console.log(user_id)
    const { data, error, isLoading } = useGetWorkoutsQuery()
    //const [filtered, setFiltered] = useState([])
    //const [searched, setSearched] = useState(0)
    //const [searchInput, setSearchInput] = useState('')
    const [search, setSearch] = useState('')

    if (isLoading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div> Error: {error.message} </div>
    }

    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-sm-8 mb-3 mb-sm-0'>
                    <div id='spotlight' className='card bg-none text-white border border-3 border-black p-0 m-5'>
                        <img className='card-img' src={gymBackground} alt='interior of a gym'></img>
                        <div className='card-img-overlay'>
                            <h1 className='card-title m-4'>Trainer Spotlight</h1>
                            <button className='btn btn-light m-1'>
                                <a href='https://www.tiktok.com/@mdjfitness/video/7335900513386482950?_r=1&_t=8kDAWO4zGdL' target='blank' className='nav-link'>tiktok</a>
                            </button>
                            <button className='btn btn-light'>
                                <a href='https://www.tiktok.com/@nataleebfitness/video/7321693098667511072?_r=1&_t=8kDAMIdFsT8' className='nav-link' target='blank'>tiktok</a>
                            </button>
                            <button className='btn btn-light m-1'>
                                <a href='https://www.tiktok.com/@tamaraaanthonyy/video/7335225800150584619?_r=1&_t=8kD94NW1ZSp' className='nav-link' target='blank'>tiktok</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Workout Library</h1>
                </div>
                <form className='d-flex justify-content-center'>
                    <input
                        className='form-control w-25 text-center' placeholder="Search workouts here..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <br></br>
            <div>
                <>
                    <div className='row'>
                        {data.filter((workout) => {
                            return search.toLowerCase() === '' ? workout : workout.workout_name.toLowerCase().includes(search)
                        }).map((workout) => (
                            
                                <div className='col-md-6 '>
                                    <div className='card m-3' key={workout.workout_id}>
                                        <div className='card-body'>
                                            <h3 className='card-title'>{workout.workout_name}</h3>
                                            <p className='card-text'><strong>Description:</strong> {workout.workout_description}</p>
                                        </div>
                                        <div>
                                            {workout.exercises.map((exercise) => (
                                                <div key={exercise.exercise_id}>
                                                    <ul className='list-group'>
                                                        <li className='list-group-item'>
                                                            <strong>{exercise.name}</strong>
                                                            <button className='btn btn-sm btn-outline-dark m-1' type='button' role='button'><Link className='nav-link' to={`/exercises/${exercise.exercise_id}`}>See More</Link></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        {(!token) ? (
                                            <>
                                                <div className='card-body'>
                                                    <button className='btn btn-outline-dark'>Login to Like Workout</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='card-body'>
                                                    <FavoriteWorkoutExercisesButton user_id={user_id} workout_id={workout.workout_id} />
                                                    {console.log(user_id, workout.workout_id)}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            

                        ))}
                    </div>
                </>
            </div>

        </>
    )

}


export default Workouts