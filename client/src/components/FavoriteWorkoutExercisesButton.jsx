

export default function FavoriteWorkoutExercisesButton({ user_id, workout_id, setFavoriteWorkoutExercises }) {
  async function handleClick() {
    try {
      // const response = await fetch('http://localhost:8080/api/favoriteWorkoutExercises', {
      const response = await fetch('https://revive-capstone.onrender.com/api/favoriteWorkoutExercises', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, workout_id}),
      });
      const result = await response.json();
      console.log(result)
      setFavoriteWorkoutExercises(result);
      
      

    } catch (error) {
    };
};

return (
  <div className="favoriteButton">
    <button className='btn btn-outline-dark' type='button' role='button' onClick={() => {
    handleClick();
    alert("This exercise has been added to your favorites.")
    }}>Add to Favorites</button>
  </div>
);
};