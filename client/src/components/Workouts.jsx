import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetWorkoutsQuery } from '../api/fetching'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import FavoriteWorkoutExercisesButton from './FavoriteWorkoutExercisesButton'

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
            <div id='spotlight' className='border border-5 border-black p-5 m-5'>
                <h1 className='m-4'>Trainer Spotlight</h1>
                <a href='https://www.tiktok.com/@mdjfitness/video/7335900513386482950?_r=1&_t=8kDAWO4zGdL' className='border border-3 border-black p-2 m-3' target='blank'>tiktok</a>
                <a href='https://www.tiktok.com/@nataleebfitness/video/7321693098667511072?_r=1&_t=8kDAMIdFsT8' className='border border-3 border-black p-2 m-3' target='blank'>tiktok</a>
                <a href='https://www.tiktok.com/@tamaraaanthonyy/video/7335225800150584619?_r=1&_t=8kD94NW1ZSp' className='border border-3 border-black p-2 m-3' target='blank'>tiktok</a>
            </div>
            <div>
                <form className='d-flex justify-content-center'>
                    <input
                        className='form-control w-25 text-center' placeholder="Search workouts here..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <>
                    <div>
                        <h1>Workout Library</h1>
                    </div>
                    <div>
                        {data.filter((workout) => {
                            return search.toLowerCase() === '' ? workout : workout.workout_name.toLowerCase().includes(search)
                        }).map((workout) => (
                            <div key={workout.workout_id}>
                                <h3>{workout.workout_name}</h3>
                                <p><strong>Description:</strong> {workout.workout_description}</p>
                                <div>
                                    {workout.exercises.map((exercise) => (
                                        <div key={exercise.exercise_id}>
                                            <ul className='list-group'>
                                                <li className='list-group-item'>
                                                    <strong>{exercise.name}</strong>
                                                    <button className='btn btn-outline-dark m-2' type='button' role='button'><Link to={`/exercises/${exercise.exercise_id}`}>See More</Link></button>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                {(!token) ? (
                                    <>
                                        <button>Login to Like Workout</button>
                                    </>
                                ) : (
                                    <>
                                        <FavoriteWorkoutExercisesButton user_id={user_id} workout_id={workout.workout_id} />
                                        {console.log(user_id, workout.workout_id)}
                                    </>
                                )}
                            </div>

                        ))}
                    </div>
                </>
            </div>

        </>
    )

}


export default Workouts