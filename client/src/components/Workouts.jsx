import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetWorkoutsQuery } from '../api/fetching'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import FavoriteExercisesButton from './FavoriteExercisesButton'

const Workouts = () => {
    const token = useSelector((it) => it.actionsSlice.token)

    const { data, error, isLoading } = useGetWorkoutsQuery()
    console.log(data)
    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState(0)
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
                            <p>Name: {workout.name}</p>
                            <img src={new URL(`../assets/images/${workout.imgUrl}`, import.meta.url).href} alt={workout.name}></img>
                        </div>
                    ))}
                </div>
                </>
            </div>

        </>
    )

}


export default Workouts