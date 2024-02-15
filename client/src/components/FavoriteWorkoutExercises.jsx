import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import RemoveFavoriteWorkoutExerciseButton from './RemoveFavoriteWorkoutExerciseButton';

export default function FavoriteWorkoutExercises({ user }) {
  const navigate = useNavigate()
  const [favoriteWorkoutExercises, setFavoriteWorkoutExercises] = useState([])
  useEffect(() => {
    async function fetchFavoriteWorkoutExercises() {
      try {
        const response = await fetch(`http://localhost:8080/api/favoriteWorkoutExercises/user/${user.user_id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
        setFavoriteWorkoutExercises(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavoriteWorkoutExercises();
  }, []);

  if(!favoriteWorkoutExercises.length) {
    return (
    <>
      <div className="favoritesContainer">
      <p className ="noFavoritesMessage">You do not currently have any favorite exercises saved.</p>
      <div className="favoritesPageButton">
        <br/>
        <button onClick={() => {
          navigate(`/workouts`);
        }}>Explore Workouts</button> 
      </div>
      </div>
    </>)
  }
  return (
    <>
    <br/>
    <div className="favoritesContainer">
      <h3 className="favoritesHeading">{`${user.firstname}`}'s Favorite Workouts</h3>
      <div className="breakLine"></div>
      <>
        {favoriteWorkoutExercises.map((favoriteWorkoutExercise) => (
          <>
          <div key={favoriteWorkoutExercise.workout_id} className="favorite-card">
            <div className="exercise-image-container">
            
            </div>
            <div className="exercise-details">
              <span className="favoriteExerciseName">  {favoriteWorkoutExercise.workout_id} </span> <br />

              {/* <button onClick={() => {
                navigate(`/exercises/${favoriteExercises.exercise_id}`);
                }}>See Exercise</button>  */}

              <button onClick={() => {
                navigate(`/exercises/${favoriteWorkoutExercise.exercise_id}`);
                }}>See workout</button> 
              <RemoveFavoriteWorkoutExerciseButton
                favoriteWorkoutExercises={favoriteWorkoutExercises}
                favoriteWorkoutExercise={favoriteWorkoutExercise}
                setFavoriteWorkoutExercises={setFavoriteWorkoutExercises}
              />
              <br />
            </div>
          </div>
          <div className="longBreakLine"></div>
        
          <br/>
          </>
        ))}

      </>
    </div>

    </>
  );
};