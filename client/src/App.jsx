import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Account from './components/Account'
import Calendar from './components/Calendar'
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
import photo1 from './assets/photo1.png'
import photo2 from './assets/photo2.png'
import photo4 from './assets/photo4.png'
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
        // const response = await fetch(`http://localhost:8080/api/users/${user_id}`);
        const response = await fetch(`https://revive-capstone.onrender.com/api/users/${user_id}`);
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
                <h1 className='display-6 mainHeader'>Welcome to <strong>revive.</strong></h1>
                
              <img className="mainPhoto" src={photo2}></img>
              <br/> <br/>
              <h3 className='mainHeader2'>Move. <strong> Nourish. </strong>Plan. <strong>Thrive.</strong></h3>
              <br/>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-md-5 text-center text-md-start'>
                
                    <p className='lead my-4 text-muted'>Your one stop shop to all that is wellness.</p>
                    <p> <strong>revive</strong> is your ultimate wellness sanctuary where your journey to a healthier, happier You begins. At <strong>revive</strong>, we believe that wellness transcends physical health, embracing healthy nutrition, mental well-being, and overall happiness. Our platform is meticulously crafted to cater to every aspect of your wellness journey, offering an array of features designed to support your fitness goals, nutritional needs, self-care practices, and much more. Whether you're diving into the world of fitness, exploring the realms of nutritious eating, or seeking to enhance your mental well-being, <strong>revive</strong> stands by your side. <br/> <br/>
                    
                    Our user-friendly platform allows you to register for a personalized experience, log in securely to access your preferences, discover and save diverse workout routines, explore and bookmark healthy recipes, integrate wellness activities into your calendar, and even find culinary inspiration from acclaimed chefs on YouTube and TikTok. With <strong>revive</strong>, planning and organizing your wellness journey has never been easier. Welcome aboard, and let's embark on this journey to <strong>revive</strong> your health, mind, and spirit.</p>
                    <p><strong>revive</strong> is designed to be your comprehensive wellness platform, offering a range of features to promote physical fitness, healthy nutrition, self-care, and more. Whether you’re a fitness enthusiast, a food lover, or someone seeking overall well-being, <strong>revive</strong> has you covered.</p> 

                    <p>Let's Get Healthy Together.</p>
                  </div>
                  <div className='col-md-6 text-center'>
                    <img className='img-thumbnail' src={photo1}></img>
                    <br/> <br/>
                    <img className='img-thumbnail' src={photo4}></img>
                  </div>
                </div>
              </div>
            </section>
          }/>
        <Route path="/account" element={<Account todaysAppointments={todaysAppointments} setTodaysAppointments={setTodaysAppointments} user={user} user_id={user.user_id} favoriteWorkoutExercises={favoriteWorkoutExercises} setFavoriteWorkoutExercises={setFavoriteWorkoutExercises} />} favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/workouts" element={<Workouts user_id={user.user_id} />} />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route path="/register" element={<Register setToken={setToken} setUser={setUser} />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipe_id" element={<SingleRecipe user_id={user.user_id} />} />
        <Route path="/selfcare/:selfCare_id" element={<SingleSelfCare user_id={user.user_id} />} />
        <Route path="/exercises/:exercise_id" element={<SingleExercise />} />
        <Route path="/calendar" element={<Calendar setAppointments={setAppointments} appointments={appointments} user_id={user.user_id} date={date} setDate={setDate} />} />
        <Route path="/calendar/:user_id/:date" element={<SingleDay setAppointments={setAppointments} appointments={appointments} user_id={user.user_id} date={date} setDate={setDate} />} />
        <Route path='/workouts/:workout_id' element={<SingleWorkoutExercise user_id={user.user_id}/>} />
      </Routes>
    </>
  )
}

export default App
