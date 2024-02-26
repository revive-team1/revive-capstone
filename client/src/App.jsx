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
import reviveCoverImage from './assets/reviveCoverImage.png'
import outdoorScene from './assets/outdoorScene.png'

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

        <Route path="/" element={
          <section id='intro'>
            <div>
                <div className='card bg-none text-white p-0'>
                  <img className='card-img' src={outdoorScene} alt='pretty landscape'></img>
                  <div className='card-img-overlay h-100 d-flex flex-column justify-content-end'>
                    <h1 className='card-text'>Welcome to <strong>revive</strong></h1>
                    <p className='card-text'>Your one stop shop to all that is wellness!</p>
                  </div>
                </div>
                <br></br>
              <div className='container-lg'>
                <div className='row justify-content-right align-items-center'>
                  <div className='col-md-5 text-center text-md-start'>
                    <p><strong>revive</strong> is the ultimate wellness sanctuary where your journey to a healthier, happier You begins. At <strong>revive</strong>, we believe that wellness transcends physical health, embracing healthy nutrition, mental well-being, and overall happiness. Our platform is meticulously crafted to cater to every aspect of your wellness journey, offering an array of features designed to support your fitness goals, nutritional needs, self-care practices, and much more. Whether you're diving into the world of fitness, exploring the realms of nutritious eating, or seeking to enhance your mental well-being, <strong>revive</strong> stands by your side. Our user-friendly platform allows you to register for a personalized experience, log in securely to access your preferences, discover and save diverse workout routines, explore and bookmark healthy recipes, integrate wellness activities into your calendar, and even find culinary inspiration from acclaimed chefs on TikTok. With <strong>revive</strong>, planning and organizing your wellness journey has never been easier. Welcome aboard, and let's embark on this journey to <strong>revive</strong> your health, mind, and spirit.</p>
                    <br></br>
                    <p>Let's Get Healthy Together.</p>
                  </div>
                  <div className='col-md-7 text-center'>
                    <img className='img-thumbnail'src={reviveCoverImage}></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
        } />
        <Route path="/account" element={<Account todaysAppointments={todaysAppointments} setTodaysAppointments={setTodaysAppointments} user={user} user_id={user.user_id} favoriteWorkoutExercises={favoriteWorkoutExercises} setFavoriteWorkoutExercises={setFavoriteWorkoutExercises} />} favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/workouts" element={<Workouts user_id={user.user_id} />} />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route path="/register" element={<Register setToken={setToken} setUser={setUser} />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipe_id" element={<SingleRecipe user_id={user.user_id} />} />
        <Route path="/selfcare/:selfCare_id" element={<SingleSelfCare user_id={user.user_id} />} />
        <Route path="/exercises/:exercise_id" element={<SingleExercise />} />
        <Route path="/calendar" element={<Calendars setAppointments={setAppointments} appointments={appointments} user_id={user.user_id} date={date} setDate={setDate} />} />
        <Route path="/calendar/:user_id/:date" element={<SingleDay setAppointments={setAppointments} appointments={appointments} user_id={user.user_id} date={date} setDate={setDate} />} />
        <Route path='/workouts/:workout_id' element={<SingleWorkoutExercise />} />
      </Routes>
    </>
  )
}

export default App
