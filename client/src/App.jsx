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
import SingleDay from './components/SingleDay'
import SingleWorkoutExercise from './components/SingleWorkoutExercise'
import './App.css'

function App() {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})
  const [favoriteWorkoutExercises, setFavoriteWorkoutExercises] = useState([])
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  const [date, setDate] = useState("")
  const [appointments, setAppointments] = useState([])
  const [todaysAppointments, setTodaysAppointments] = useState([])

  useEffect(() => {
    const fetchUserInfo = async (user_id) => {
        
        try {
          const response = await fetch(`http://localhost:8080/api/users/${user_id}`);
          // const response = await fetch(`https://revive-capstone.onrender.com/api/users/${user_id}`);
          const result = await response.json();
          setUser(result)
        } catch (error) {
          console.error(error)
        }
      }
      if (localStorage.getItem('token') && localStorage.getItem('userId')) {
        fetchUserInfo(JSON.parse(localStorage.getItem('userId')));
      }
     
  }, []);

  return (
    <>
    <div>
      <header className='header'>
      <Navigations />
      </header>
    </div>
      <Routes>

        <Route path="/" element = {
          <section id='intro'>
              <div className='container-lg'>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-md-5 text-center text-md-start'>
                  <h1 className='display-6'>Welcome to revive</h1>
                    <p className='lead my-4 text-muted'>Your one stop shop to all that is wellness!</p>
                    <p>revive is designed to be your comprehensive wellness platform, offering a range of features to promote physical fitness, healthy nutrition, self-care, and more. Whether you’re a fitness enthusiast, a food lover, or someone seeking overall well-being, revive has you covered.</p>
                  </div>
                  <div className='col-md-6 text-center'>
                    <p>hey, let's get healthy</p>
                  </div>
                </div>
              </div>
            </section>
          }/>
        <Route path="/account" element={<Account todaysAppointments={todaysAppointments} setTodaysAppointments={setTodaysAppointments} user={user} user_id={user.user_id} favoriteWorkoutExercises={favoriteWorkoutExercises} setFavoriteWorkoutExercises={setFavoriteWorkoutExercises}/>} favoriteRecipes = {favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/workouts" element={<Workouts user_id={user.user_id}/>} />
        <Route path="/login"  element={<Login setToken={setToken} setUser={setUser}/>} />
        <Route path="/register"  element={<Register setToken={setToken} setUser={setUser} />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipe_id" element={<SingleRecipe user_id={user.user_id} />} />
        <Route path="/selfcare/:selfCare_id" element={<SingleSelfCare user_id={user.user_id}/>} />
        <Route path="/exercises/:exercise_id" element={<SingleExercise />} />
        <Route path="/calendar" element={<Calendars setAppointments={setAppointments} appointments={appointments} user_id={user.user_id} date={date} setDate={setDate}/>} />
        <Route path="/calendar/:user_id/:date" element={<SingleDay setAppointments={setAppointments} appointments={appointments} user_id={user.user_id} date={date} setDate={setDate}/>} />
        <Route path='/workouts/:workout_id' element={<SingleWorkoutExercise />} />
      </Routes>
    </>
  )
}

export default App
