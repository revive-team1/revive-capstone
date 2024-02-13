

export default function FavoriteExercisesButton({ user_id, exercise_id, setFavoriteExercises }) {
  async function handleClick() {
    try {
      const response = await fetch('http://localhost:8080/api/favoriteExercises', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id, exercise_id}),
      });
      const result = await response.json();
      setFavoriteExercises(result);
      

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