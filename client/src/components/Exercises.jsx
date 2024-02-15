import React from 'react'
import { Link } from 'react-router-dom'
import { useGetExercisesQuery } from '../api/fetching'
import { useSelector } from 'react-redux'
import { useState } from 'react'
//import FavoriteExercisesButton from './FavoriteExercisesButton'

const Exercises = ({ user_id }) => {

    const token = useSelector((it) => it.actionsSlice.token)

    const { data, error, isLoading } = useGetExercisesQuery()
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

    if (!searched) {
        return (
            <>
                <div id='spotlight' className='border border-5 border-black p-5 m-5'>
                    <h1 className='m-4'>Personal Trainer Spotlight</h1>
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
                    <div>
                        <h1>Exercise Library</h1>
                    </div>
                    <div>
                        {data.map((exercise) => (
                            <div key={exercise.exercise_id}>
                                <div>
                                    <img src={new URL(`../assets/images/${exercise.imgurl}`, import.meta.url).href} alt={exercise.name}></img>
                                    <h2> {exercise.name} </h2>
                                    <p><strong>Description:</strong><span> {exercise.description}</span> </p>
                                    <button className='btn btn-outline-dark' type='button' role='button'><Link to={`/exercises/${exercise.exercise_id}`}>See More</Link></button>
                                    {(!token) ? (
                                        <>
                                            <button className='btn btn-outline-dark' type='button' role='button'><Link to='/login'>Login to Like Exercise</Link></button>
                                        </>
                                    ) : (
                                        <>
                                            <FavoriteExercisesButton  user_id={user_id} exercise_id={exercise.exercise_id} />
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </>
        )
    } if (searched > 0 && filtered.length > 0) {
        return (
            <>
                <div id='spotlight' className='border border-5 border-black p-5 m-5'>
                    <h1 className='m-4'>Chef Spotlight</h1>
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
                    {filtered.length != data.length ? <p> Exercises Found: {filtered.length}</p> : ''}
                </form>
                <div>
                    <div>
                        {filtered.map((exercise) => (
                            <div key={exercise.exercise_id}>
                                <div>
                                    <img src=
                                        {new URL(`../assets/images/${exercise.imgUrl}`, import.meta.url).href} alt={exercise.name}></img>
                                    <h2> {exercise.name} </h2>
                                    <p><strong>Description:</strong><span> {exercise.description}</span></p>
                                    <button className='btn btn-outline-dark' type='button' role='button'><Link to={`/exercises/${exercise.exercise_id}`}>See More</Link></button>

                                    {(!token) ? (
                                        <>
                                            <button className='btn btn-outline-dark' type='button' role='button'><Link to='/login'>Login to Like Exercise</Link></button>
                                        </>
                                    ) : (
                                        <>
                                           <FavoriteExercisesButton className='btn btn-outline-dark' type='button' role='button' user_id={user_id} exercise_id={exercise.exercise_id} />
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Exercises