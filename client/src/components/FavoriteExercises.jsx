import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import RemoveFavoriteExerciseButton from './RemoveFavoriteExerciseButton';

export default function FavoriteExercises({ user }) {
  const navigate = useNavigate()
  const [favoriteExercises, setFavoriteExercises] = useState([])
  useEffect(() => {
    async function fetchFavoriteExercises() {
      try {
        const response = await fetch(`http://localhost:8080/api/favoriteExercises/user/${user.user_id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setFavoriteExercises(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavoriteExercises();
  }, []);

  if(!favoriteExercises.length) {
    return (
    <>
      <div className="favoritesContainer">
      <p className ="noFavoritesMessage">You do not currently have any favorite exercises saved.</p>
      <div className="favoritesPageButton">
        <br/>
        <button onClick={() => {
          navigate(`/exercises`);
        }}>Explore Exercises</button> 
      </div>
      </div>
    </>)
  }
  return (
    <>
    <br/>
    <div className="favoritesContainer">
      <h3 className="favoritesHeading">{`${user.firstname}`}'s Favorite Exercises</h3>
      <div className="breakLine"></div>
      <>
        {favoriteExercises.map((favoriteExercise) => (
          <>
          <div key={favoriteExercise.exercise_id} className="favorite-card">
            <div className="exercise-image-container">
              <img className="exerciseImage" src={favoriteExercise.imgurl} />
            </div>
            <div className="exercise-details">
              <span className="favoriteExerciseName">  {favoriteExercise.name} </span> <br />

              {/* <button onClick={() => {
                navigate(`/exercises/${favoriteExercises.exercise_id}`);
                }}>See Exercise</button>  */}

              <button onClick={() => {
                navigate(`/exercises/${favoriteExercise.exercise_id}`);
                }}>See exercise</button> 
              <RemoveFavoriteExerciseButton
                favoriteExercises={favoriteExercises}
                favoriteExercise={favoriteExercise}
                setFavoriteExercises={setFavoriteExercises}
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