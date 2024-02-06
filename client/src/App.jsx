import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Account from './components/Account'
import Calendars from './components/Calendars'
import Exercises from './components/Exercises'
import FavoriteExercises from './components/FavoriteExercises'
import FavoriteRecipes from './components/FavoriteRecipes'
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
  // const [token, setToken] = useState(null)
  const [user, setUser] = useState({})

  return (
    <>
      <Navigations />
      <h1>revive</h1>

      <Routes>

        <Route path="/" />
        <Route path="/account" element={<Account />} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/excerises" element={<Exercises />} />
        <Route path="/login" setUser={setUser} element={<Login />} />
        <Route path="/register" setUser={setUser} element={<Register />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/selfcare/:id" element={<SingleSelfCare />} />
        <Route path="/excerises/:id" element={<SingleExercise />} />
        <Route path="/favorite-exercises" user ={user} setUser = {setUser} element={<FavoriteExercises />} />
        <Route path="/favorite-recipes" user={user} setUser = {setUser} element={<FavoriteRecipes />} />
        

      </Routes>
    </>
  )
}

export default App
