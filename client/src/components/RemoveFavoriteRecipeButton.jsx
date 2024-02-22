

export default function RemoveFavoriteRecipeButton({ favoriteRecipe,favoriteRecipes, setFavoriteRecipes }) {

  async function handleClick() {
    try {
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
      <button onClick={() => {
        handleClick();
      }}>Remove from Favorites</button>
    </div>
  );
};