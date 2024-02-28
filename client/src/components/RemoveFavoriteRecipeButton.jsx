

export default function RemoveFavoriteRecipeButton({ favoriteRecipe,favoriteRecipes, setFavoriteRecipes }) {

  async function handleClick() {
    try {
      // const response = await fetch(`http://localhost:8080/api/favoriteRecipes/${favoriteRecipe.favorite_id}`, {
      const response = await fetch(`https://revive-capstone.onrender.com/api/favoriteRecipes/${favoriteRecipe.favorite_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setFavoriteRecipes(favoriteRecipes.filter((favoriteRecipe) => favoriteRecipe.favorite_id !== result.favorite_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <br/>
      <button className="btn btn-outline-dark" onClick={() => {
        handleClick();
      }}>Remove from Favorites</button>
    </div>
  );
};