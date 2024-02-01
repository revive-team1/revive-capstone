const client = require("./client");
const {
  exercises,
  users,
  selfcare,
  recipes,
  calendar,
  favoriteRecipes,
  favoriteExercises,
} = require("./seedData");

// drop tables for clients, membership, exercises
async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
      DROP TABLE IF EXISTS exercises CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS recipes CASCADE;
      DROP TABLE IF EXISTS favoriteRecipes CASCADE;
      DROP TABLE IF EXISTS favoriteExercises CASCADE;
      DROP TABLE IF EXISTS calendar CASCADE;
      DROP TABLE IF EXISTS selfcare CASCADE;
    `);
  } catch (error) {
    throw error;
  }
}

const createInitialCalendars = async () => {
  try {
    for (const date of calendars) {
      await client.query(
        `
                INSERT INTO calendar(user_id, activity_date, activity_name, activity_time, activity_description, activity_link)
                VALUES($1, $2, $3, $4, $5, $6);
            `,
        [
          date.user_id,
          date.activity_date,
          date.activity_name,
          date.activity_time,
          date.activity_description,
          date.activity_link,
        ]
      );
    }
    console.log("created calendar!");
  } catch (error) {
    throw error;
  }
};

const createInitialFavoriteRecipes = async () => {
  try {
    for (const favRecipe of favoriteRecipes) {
      await client.query(
        `
                INSERT INTO user_favorite_places(user_id, recipe_id)
                VALUES($1, $2);
            `,
        [favRecipe.user_id, favRecipe.recipe_id]
      );
    }
    console.log("created favorite places!");
  } catch (error) {
    throw error;
  }
};

const createInitialFavoriteExercises = async () => {
  try {
    for (const favExercise of favoriteExercises) {
      await client.query(
        `
                INSERT INTO user_favorite_places(user_id, exercise_id)
                VALUES($1, $2);
            `,
        [favExercise.user_id, favExercise.exercise_id]
      );
    }
    console.log("created favorite places!");
  } catch (error) {
    throw error;
  }
};
