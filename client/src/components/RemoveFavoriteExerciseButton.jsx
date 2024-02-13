

export default function RemoveFavoriteExerciseButton({ favoriteExercise,favoriteExercises, setFavoriteExercises }) {

  async function handleClick() {
    try {
      const response = await fetch(`http://localhost:8080/api/favoriteExercises/${favoriteExercise.favorite_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setFavoriteExercises(favoriteExercises.filter((favoriteExercise) => favoriteExercise.favorite_id !== result.favorite_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <button className='btn btn-outline-dark' type='button' role='button' onClick={() => {
        handleClick();
      }}>Remove from Favorites</button>
    </div>
  );
};