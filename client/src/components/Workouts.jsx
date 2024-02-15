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
    console.log(data)
    const [filtered, setFiltered] = useState([])
    const [searched, setSearched] = useState(0)
    const [searchInput, setSearchInput] = useState('')

    function searchExercises(e) {
        e.preventDefault()
        setSearched(searched + 1)
        const filter = data.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchInput.toLowerCase()))
        setFiltered(filter)
    }

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
                <a href='www.tiktok.com' className='border border-3 border-black p-2 m-3'>tiktok</a>
                <a href='www.tiktok.com' className='border border-3 border-black p-2 m-3'>tiktok</a>
                <a href='www.tiktok.com' className='border border-3 border-black p-2 m-3'>tiktok</a>
            </div>
            <form onSubmit={searchExercises}>
                <label>
                    Search Exercise by Name:
                </label>
                <input
                    placeholder='Type to search...'
                    type='search'
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />
                <button type='submit'>Search Exercise</button>
            </form>
            <div>
                <>
                    <div>
                        <h1>Workout Library</h1>
                    </div>
                    <div>
                        {data.map((workout) => (
                            <div key={workout.workout_id}>
                                <h3>Name: {workout.workout_name}</h3>
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