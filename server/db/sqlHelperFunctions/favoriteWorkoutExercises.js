const client = require("../client");

async function getAllFavoriteWorkoutExercises() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM favoriteWorkoutExercises;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getFavoriteWorkoutExerciseById(id) {
  try {
    const {
      rows: [favoriteWorkoutExercise],
    } = await client.query(
      `
          SELECT * FROM favoriteWorkoutExercises
          WHERE favorite_id = $1;
      `,
      [id]
    );
    return favoriteWorkoutExercise;
  } catch (error) {
    throw error;
  }
}

async function addFavoriteWorkoutExercise(body) {
  const { user_id, workout_id } = body;
  try {
    const {
      rows: [favoriteWorkoutExercise],
    } = await client.query(
      `
          INSERT INTO favoriteWorkoutExercises (user_id, workout_id)
          VALUES($1, $2)
          RETURNING *;
      `,
      [user_id, workout_id]
    );
    return favoriteWorkoutExercise;
  } catch (error) {
    throw error;
  }
}

async function deleteFavoriteWorkoutExercise(id) {
  try {
    const {
      rows: [favoriteWorkoutExercise],
    } = await client.query(
      `
          DELETE FROM favoriteWorkoutExercises
          WHERE favorite_id = $1
          RETURNING *;
      `,
      [id]
    );
    return favoriteWorkoutExercise;
  } catch (error) {
    throw error;
  }
}

async function getFavoriteWorkoutExercisesByUserId(id) {
  try {
    const { rows } = await client.query(
      `
      SELECT favoriteWorkoutExercises.favorite_id, workouts.workout_id, workouts.workout_name
      FROM favoriteWorkoutExercises
      INNER JOIN workouts ON favoriteWorkoutExercises.workout_id = workouts.workout_id
      WHERE favoriteWorkoutExercises.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllFavoriteWorkoutExercises,
  getFavoriteWorkoutExerciseById,
  addFavoriteWorkoutExercise,
  deleteFavoriteWorkoutExercise,
  getFavoriteWorkoutExercisesByUserId,
};
