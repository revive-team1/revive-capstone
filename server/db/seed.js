const client = require("./client");
const {
  exercises,
  users,
  selfCare,
  recipes,
  calendars,
  favoriteRecipes,
  favoriteExercises,
  favoriteSelfCare,
  workouts
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
      DROP TABLE IF EXISTS calendars CASCADE;
      DROP TABLE IF EXISTS selfCare CASCADE;
      DROP TABLE IF EXISTS workouts CASCADE;
      DROP TABLE IF EXISTS favoriteSelfCare CASCADE;
    `);
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Building All Tables...");
    await client.query(`
        CREATE TABLE exercises (
            exercise_id SERIAL PRIMARY KEY,
            name TEXT,
            description TEXT,
            imgUrl TEXT,
            difficulty TEXT
        );
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            firstname TEXT NOT NULL,
            lastname TEXT NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL, 
            email TEXT UNIQUE NOT NULL
        );
        CREATE TABLE recipes (
            recipe_id SERIAL PRIMARY KEY, 
            name TEXT, 
            difficulty TEXT, 
            recipe_yield TEXT, 
            imgUrl TEXT,
            description TEXT
        );
        CREATE TABLE selfCare (
            selfCare_id SERIAL PRIMARY KEY,
            name TEXT, 
            imgUrl TEXT,
            description TEXT, 
            article_url TEXT
        );
        CREATE TABLE calendars (
            calendar_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            activity_name TEXT,
            activity_description TEXT,
            activity_date DATE,
            activity_time TIME,
            activity_link TEXT
        );
        CREATE TABLE favoriteRecipes (
            favorite_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            recipe_id INTEGER REFERENCES recipes(recipe_id)
        );
        CREATE TABLE favoriteExercises (
            favorite_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            exercise_id INTEGER REFERENCES exercises(exercise_id)  
        );
        CREATE TABLE workouts (
          workout_id SERIAL PRIMARY KEY,
          description TEXT,
          exercise_id1 INTEGER REFERENCES exercises(exercise_id),
          exercise_id2 INTEGER REFERENCES exercises(exercise_id),
          exercise_id3 INTEGER REFERENCES exercises(exercise_id),
          exercise_id4 INTEGER REFERENCES exercises(exercise_id),
          exercise_id5 INTEGER REFERENCES exercises(exercise_id),
          exercise_id6 INTEGER REFERENCES exercises(exercise_id),
          exercise_id7 INTEGER REFERENCES exercises(exercise_id),
          exercise_id8 INTEGER REFERENCES exercises(exercise_id)
        );
        CREATE TABLE favoriteSelfCare (
          favorite_id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(user_id),
          selfCare_id INTEGER REFERENCES selfCare(selfCare_id)  
      );
        `);
  } catch (error) {
    console.log("error creating tables");
    throw error;
  }
}

const createInitialCalendars = async () => {
  try {
    for (const appointment of calendars) {
      await client.query(
        `
            INSERT INTO calendars(user_id, activity_date, activity_name, activity_time, activity_description, activity_link)
            VALUES($1, $2, $3, $4, $5, $6);
        `,
        [
          appointment.user_id,
          appointment.activity_date,
          appointment.activity_name,
          appointment.activity_time,
          appointment.activity_description,
          appointment.activity_link,
        ]
      );
    }
    console.log("created calendars!");
  } catch (error) {
    throw error;
  }
};

const createInitialFavoriteRecipes = async () => {
  try {
    for (const favRecipe of favoriteRecipes) {
      await client.query(
        `
            INSERT INTO favoriteRecipes(user_id, recipe_id)
            VALUES($1, $2);
        `,
        [favRecipe.user_id, favRecipe.recipe_id]
      );
    }
    console.log("created favorite recipes!");
  } catch (error) {
    throw error;
  }
};

const createInitialFavoriteExercises = async () => {
  try {
    for (const favExercise of favoriteExercises) {
      await client.query(
        `
            INSERT INTO favoriteExercises(user_id, exercise_id)
            VALUES($1, $2);
        `,
        [favExercise.user_id, favExercise.exercise_id]
      );
    }

    console.log("created favorite exercises!");
  } catch (error) {
    throw error;
  }
};

const createInitialUsers = async () => {
  try {
    for (const user of users) {
      await client.query(
        `
                INSERT INTO users(firstname, lastname, username, password, email)
                VALUES($1, $2, $3, $4, $5);
            `,
        [
          user.firstname,
          user.lastname,
          user.username,
          user.password,
          user.email,
        ]
      );
    }
    console.log("created users");
  } catch (error) {
    throw error;
  }
};

const createInitialExercises = async () => {
  try {
    for (const exercise of exercises) {
      await client.query(
        `
                INSERT INTO exercises(name, description, difficulty, imgUrl)
                VALUES($1, $2, $3, $4);
            `,
        [
          exercise.name,
          exercise.description,
          exercise.difficulty,
          exercise.imgUrl,
        ]
      );
    }
    console.log("created exercises");
  } catch (error) {
    throw error;
  }
};

const createInitialSelfCare = async () => {
  try {
    for (const activity of selfCare) {
      await client.query(
        `
                INSERT INTO selfCare(name, imgUrl, description, article_url)
                VALUES($1, $2, $3, $4)
                `,
        [activity.name, activity.imgUrl, activity.description, activity.article_url]
      );
    }
    console.log("created self care!");
  } catch (error) {
    throw error;
  }
};

const createInitialRecipes = async () => {
  try {
    for (const recipe of recipes) {
      await client.query(
        `
                INSERT INTO recipes(name, difficulty, recipe_yield, imgUrl, description)
                VALUES($1, $2, $3, $4, $5)
                `,
        [
          recipe.name,
          recipe.difficulty,
          recipe.recipe_yield,
          recipe.imgUrl,
          recipe.description,
        ]
      );
    }
    console.log("created recipes!");
  } catch (error) {
    throw error;
  }
};
const createInitialFavoriteSelfCare = async () => {
  try {
    for (const favSelfCare of favoriteSelfCare) {
      await client.query(
        `
            INSERT INTO favoriteSelfCare(user_id, selfCare_id)
            VALUES($1, $2);
        `,
        [favSelfCare.user_id, favSelfCare.selfCare_id]
      );
    }

    console.log("created favorite self care!");
  } catch (error) {
    throw error;
  }
};

const createInitialWorkouts = async () => {
  try {
    for (const workout of workouts) {
      await client.query(
        `
                INSERT INTO workouts(description, exercise_id1, exercise_id2, exercise_id3, exercise_id4, exercise_id5, exercise_id6, exercise_id7, exercise_id8 )
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);
            `,
        [
          workout.description,
          workout.exercise_id1,
          workout.exercise_id2,
          workout.exercise_id3,
          workout.exercise_id4,
          workout.exercise_id5,
          workout.exercise_id6,
          workout.exercise_id7,
          workout.exercise_id8,
        ]
      );
    }
    console.log("created workouts");
  } catch (error) {
    throw error;
  }
};


// Call all functions to build the db
const buildDb = async () => {
  try {
    // ACTUALLY CONNECT TO THE LOCAL DB
    client.connect();

    // run the functions
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialExercises();
    await createInitialSelfCare();
    await createInitialRecipes();
    await createInitialCalendars();
    await createInitialFavoriteRecipes();
    await createInitialFavoriteExercises();
    await createInitialFavoriteSelfCare();
    await createInitialWorkouts();
  } catch (error) {
    console.error(error);
  } finally {
    // close the connection to the local db. will always run
    client.end();
  }
};
buildDb();
