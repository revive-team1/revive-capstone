import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import RemoveFavoriteRecipeButton from './RemoveFavoriteRecipeButton';

export default function FavoriteExercises({ user }) {
  const navigate = useNavigate()
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  useEffect(() => {
    async function fetchFavoriteRecipes() {
      try {
        // const response = await fetch(`http://localhost:8080/api/favoriteRecipes/user/${user.user_id}`, {
        const response = await fetch(`https://revive-capstone.onrender.com/api/favoriteRecipes/user/${user.user_id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
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
    <br/>
    <div className="favoritesContainer">
    <h3 className="favoritesHeading">{`${user.firstname}`}'s Favorite Recipes</h3>
    <div className="breakLine"></div>
    <br/>
      <p className ="noFavoritesMessage">You do not currently have any favorite recipes saved.</p>
      <div className="favoritesPageButton">
        <br/>
        <button className='btn btn-outline-dark' onClick={() => {
          navigate(`/recipes`);
        }}>Explore Recipes</button> 
      </div>
      </div>
    </>)
  }
  return (
    <>
    <br/>
    <div className="favoritesContainer">
      <h3 className="favoritesHeading">{`${user.firstname}`}'s Favorite Recipes</h3>
      <div className="breakLine"></div>
      <>
        {favoriteRecipes.map((favoriteRecipe) => (
          <>
          <div key={favoriteRecipe.recipe_id} className="favorite-card card">
            <div className="recipe-image-container">
            </div>
            <div className="favorite-details">
              <span className="favoriteName">  {favoriteRecipe.name} </span> <br /> <br/>
              <div className="shortBreakLine"></div> <br/>

              <button className="btn btn-outline-dark" onClick={() => {
                navigate(`/recipes/${favoriteRecipe.recipe_id}`);
                }}>See Recipe</button>

              <RemoveFavoriteRecipeButton
                favoriteRecipes={favoriteRecipes}
                favoriteRecipe={favoriteRecipe}
                setFavoriteRecipes={setFavoriteRecipes}
              />
            
              <br />
            </div>
          </div>
        
          <br/>
          </>
        ))}

      </>
    </div>

    </>
  );
};