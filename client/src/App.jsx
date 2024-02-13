import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Account from './components/Account'
import Calendars from './components/Calendars'
import Exercises from './components/Exercises'
import Workouts from './components/Workouts'
import Login from './components/Login'
import Navigations from './components/Navigations'
import Recipes from './components/Recipes'
import Register from './components/Register'
import SelfCare from './components/SelfCare'
import SingleExercise from './components/SingleExercise'
import SingleRecipe from './components/SingleRecipe'
import SingleSelfCare from './components/SingleSelfCare'
import './App.css'

function App() {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})
  const [favoriteExercises, setFavoriteExercises] = useState([])
  const [favoriteRecipes, setFavoriteRecipes] = useState([])

  return (
    <>
    <div>
      <header className='header'>
      <Navigations />
      </header>
      <h1>revive</h1>
    </div>
      <Routes>

        <Route path="/" element = {
          <section id='intro'>
              <div className='container-lg'>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-md-5 text-center text-md-start'>
                  <h1 className='display-6'>Welcome to revive</h1>
                    <p className='lead my-4 text-muted'>Your one stop shop to all that is wellness!</p>
                  </div>
                  <div className='col-md-6 text-center'>
                    <p>hey, let's get healthy</p>
                  </div>
                </div>
              </div>
            </section>
          }/>
        <Route path="/account" element={<Account user={user} favoriteExercises={favoriteExercises} setFavoriteExercises={setFavoriteExercises}/>} favoriteRecipes = {favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/workouts" element={<Workouts user_id={user.user_id}/>} />
        <Route path="/login"  element={<Login setToken={setToken} setUser={setUser}/>} />
        <Route path="/register"  element={<Register setToken={setToken} setUser={setUser} />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipe_id" element={<SingleRecipe user_id={user.user_id} />} />
        <Route path="/selfcare/:selfCare_id" element={<SingleSelfCare />} />
        <Route path="/exercises/:exercise_id" element={<SingleExercise />} />

      </Routes>
    </>
  )
}

export default App
