

export default function RemoveFavoriteWorkoutExerciseButton({ favoriteWorkoutExercise,favoriteWorkoutExercises, setFavoriteWorkoutExercises }) {

  async function handleClick() {
    try {
      // const response = await fetch(`http://localhost:8080/api/favoriteWorkoutExercises/${favoriteWorkoutExercise.favorite_id}`, {
      const response = await fetch(`https://revive-capstone.onrender.com/api/favoriteWorkoutExercises/${favoriteWorkoutExercise.favorite_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setFavoriteWorkoutExercises(favoriteWorkoutExercises.filter((favoriteWorkoutExercise) => favoriteWorkoutExercise.favorite_id !== result.favorite_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <br/>
      <button className='btn btn-outline-dark' type='button' role='button' onClick={() => {
        handleClick();
      }}>Remove from Favorites</button>
    </div>
  );
};