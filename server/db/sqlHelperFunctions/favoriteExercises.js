const client = require("../client");

async function getAllFavoriteExercises() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM favoriteExercises;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getFavoriteExerciseById(id) {
  try {
    const {
      rows: [favoriteExercise],
    } = await client.query(
      `
          SELECT * FROM favoriteExercises
          WHERE favorite_id = $1;
      `,
      [id]
    );
    return favoriteExercise;
  } catch (error) {
    throw error;
  }
}

async function addFavoriteExercise(body) {
  const { user_id, exercise_id } = body;
  try {
    const {
      rows: [favoriteExercise],
    } = await client.query(
      `
          INSERT INTO favoriteExercises (user_id, exercise_id)
          VALUES($1, $2)
          RETURNING *;
      `,
      [user_id, exercise_id]
    );
    return favoriteExercise;
  } catch (error) {
    throw error;
  }
}

async function deleteFavoriteExercise(id) {
  try {
    const {
      rows: [favoriteExercise],
    } = await client.query(
      `
          DELETE FROM favoriteExercises
          WHERE favorite_id = $1
          RETURNING *;
      `,
      [id]
    );
    return favoriteExercise;
  } catch (error) {
    throw error;
  }
}

async function getFavoriteExercisesByUserId(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM exercises
          INNER JOIN favoriteExercises
          ON favoriteExercises.exercise_id = exercise.exercise_id
          WHERE favoriteExercises.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllFavoriteExercises,
  getFavoriteExerciseById,
  addFavoriteExercise,
  deleteFavoriteExercise,
  getFavoriteExercisesByUserId,
};
