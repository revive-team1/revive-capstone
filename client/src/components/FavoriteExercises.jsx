import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
// import RemoveButton from './RemoveButton';

export default function FavoriteExercises({ user, favorites, setFavorites }) {
  const navigate = useNavigate()
  const [favoriteExcercises, setFavoriteExercises] = useState([])
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

  if(!favorites.length) {
    return (
    <>
      <p className ="noFavoritesMessage">You do not currently have any favorite exercises saved.</p>
      <div className="favoritesPageButton">
        <button onClick={() => {
          navigate(`/places`);
        }}>Explore Locations</button> 
      </div>
    </>)
  }
  return (
    <>
    <br/>
    <div className="favoritesContainer">
      <h1 className="favoritesHeading">{`${user.first_name}`}'s Favorite Places</h1>
      <>
        {favoriteExercises.map((favoriteExercise) => (
          <>
          <div key={favoritePlace.place_id} className="favorite-card">
            <div className="place-image-container">
              <img className="place-image" src={favoritePlace.img_url} />
            </div>
            <div className="place-details">
              <span className="favoritePlaceName">  {favoritePlace.place_name} </span> <br />

              <RemoveButton
                favorites={favorites}
                favoritePlace={favoritePlace}
                setFavorites={setFavorites}
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