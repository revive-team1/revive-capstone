import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetWorkoutsQuery } from '../api/fetching'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import FavoriteWorkoutExercisesButton from './FavoriteWorkoutExercisesButton'
import WorkoutPhoto from '../assets/WorkoutPhoto.jpg'

const Workouts = ({ user_id }) => {
    const token = useSelector((it) => it.actionsSlice.token)
    console.log(user_id)
    const { data, error, isLoading } = useGetWorkoutsQuery()
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    if (isLoading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div> Error: {error.message} </div>
    }

    return (
        <>
            <div id='spotlight' className='border-none p-5 m-5'>
                <div className='d-flex justify-content-center'>
                    <h1 className='m-4'>Trainer Spotlight</h1>
                </div>
                <div className='longBreakLine'></div>
                <br></br>
                <div className='d-flex flex-wrap justify-content-center'>
                    <button className='btn btn-light m-1'>
                        <a href='https://www.tiktok.com/
                        @mdjfitness/video/7335900513386482950?_r=1&_t=8kDAWO4zGdL' target='blank' className='nav-link'>tiktok</a>
                    </button>
                    <button className='btn btn-light'>
                        <a href='https://www.tiktok.com/@nataleebfitness/video/7321693098667511072?_r=1&_t=8kDAMIdFsT8' className='nav-link' target='blank'>tiktok</a>
                    </button>
                    <button className='btn btn-light m-1'>
                        <a href='https://www.tiktok.com/@tamaraaanthonyy/video/7335225800150584619?_r=1&_t=8kD94NW1ZSp' className='nav-link' target='blank'>tiktok</a>
                    </button>
                    <br />
                </div>
                <br />
                <img className='accountPhoto' src={WorkoutPhoto}></img>
                <br />
                <br />
                <h2 className='fw-light'>Workout Library</h2>
                <br />
                <form className='d-flex justify-content-center'>
                    <input
                        className='form-control w-75 text-center' placeholder="Search workouts..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <>
                    <div className='row'>
                        {data.filter((workout) => {
                            return search.toLowerCase() === '' ? workout : workout.workout_name.toLowerCase().includes(search)
                        }).map((workout) => (

                            <div className='col-md-6 '>
                                <div className='card m-3' key={workout.workout_id}>
                                    <img className='card-img-top' src={new URL(`../assets/images/${workout.workout_image}`, import.meta.url).href} alt={workout.name}></img>
                                    <div className='card-body'>
                                        <h3 className='card-title'>{workout.workout_name}</h3>
                                    </div>

                                    {(!token) ? (
                                        <>
                                            <div className='card-body'>
                                                <button className='btn btn-outline-dark m-2'>Login to Like Workout</button>
                                                <button className='btn btn-outline-dark m-2' onClick={() => { navigate(`/workouts/${workout.workout_id}`) }}>See Details</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='card-body'>
                                                <FavoriteWorkoutExercisesButton user_id={user_id} workout_id={workout.workout_id} />
                                                {console.log(user_id, workout.workout_id)}
                                                <button className='btn btn-outline-dark m-2' onClick={() => { navigate(`/workouts/${workout.workout_id}`) }}>See Details</button>
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