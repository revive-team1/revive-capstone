import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
// import RemoveButton from './RemoveButton';

export default function FavoriteExercises({ user }) {
  const navigate = useNavigate()
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  useEffect(() => {
    async function fetchFavoriteRecipes() {
      try {
        const response = await fetch(`http://localhost:8080/api/favoriteRecipes/user/${user.user_id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setFavoriteRecipes(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavoriteRecipes();
  }, []);

  if(!favoriteRecipes.length) {
    return (
    <>
      <p className ="noFavoritesMessage">You do not currently have any favorite recipes saved.</p>
      <div className="favoritesPageButton">
        <button onClick={() => {
          navigate(`/`);
        }}>Home</button> 
      </div>
    </>)
  }
  return (
    <>
    <br/>
    <div className="favoritesContainer">
      <h1 className="favoritesHeading">{`${user.first_name}`}'s Favorite Places</h1>
      <>
        {favoriteRecipes.map((favoriteRecipe) => (
          <>
          <div key={favoriteRecipe.recipe_id} className="favorite-card">
            {/* <div className="place-image-container">
              <img className="place-image" src={favoritePlace.img_url} />
            </div> */}
            <div className="favorite-details">
              <span className="favoriteRecipeName">  {favoriteRecipe.name} </span> <br />

              {/* <RemoveButton
                favorites={favorites}
                favoritePlace={favoritePlace}
                setFavorites={setFavorites}
              /> */}
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