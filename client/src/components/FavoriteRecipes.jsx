import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import RemoveFavoriteRecipeButton from './RemoveFavoriteRecipeButton';

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
    <div className="favoritesContainer">
      <p className ="noFavoritesMessage">You do not currently have any favorite recipes saved.</p>
      <div className="favoritesPageButton">
        <br/>
        <button onClick={() => {
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
          <div key={favoriteRecipe.recipe_id} className="favorite-card">
            <div className="recipe-image-container">
              <img className="recipeImage" src={favoriteRecipe.imgurl} />
            </div>
            <div className="favorite-details">
              <span className="favoriteRecipeName">  {favoriteRecipe.name} </span> <br />

              <button onClick={() => {
                navigate(`/recipes/${favoriteRecipe.recipe_id}`);
                }}>See Recipe</button> <br/>

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