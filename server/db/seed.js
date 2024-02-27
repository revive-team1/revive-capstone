const client = require("./client");
const {
  exercises,
  users,
  selfCare,
  recipes,
  calendars,
  favoriteRecipes,
  favoriteWorkoutExercises,
  favoriteSelfCare,
  workouts,
  workoutExercises
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
      DROP TABLE IF EXISTS calendars CASCADE;
      DROP TABLE IF EXISTS selfCare CASCADE;
      DROP TABLE IF EXISTS workouts CASCADE;
      DROP TABLE IF EXISTS favoriteSelfCare CASCADE;
      DROP TABLE IF EXISTS workoutExercises CASCADE;
      DROP TABLE IF EXISTS favoriteWorkoutExercises CASCADE;
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
        
        CREATE TABLE workouts (
          workout_id SERIAL PRIMARY KEY,
          workout_name TEXT,
          workout_description TEXT,
          workout_image TEXT
        );
        CREATE TABLE favoriteSelfCare (
          favorite_id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(user_id),
          selfCare_id INTEGER REFERENCES selfCare(selfCare_id)  
        );
        CREATE TABLE workoutExercises (
          workoutExercise_id SERIAL PRIMARY KEY,
          workout_id INTEGER REFERENCES workouts(workout_id),
          exercise_id INTEGER REFERENCES exercises(exercise_id),
          sequence_number INTEGER
        );
        CREATE TABLE favoriteWorkoutExercises (
          favorite_id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(user_id),
          workout_id INTEGER REFERENCES workouts(workout_id)  
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
                INSERT INTO workouts(workout_name, workout_description, workout_image)
                VALUES($1, $2, $3);
            `,
        [
          workout.workout_name,
          workout.workout_description,
          workout.workout_image
        ]
      );
    }
    console.log("created workouts");
  } catch (error) {
    throw error;
  }
};

const createInitialWorkoutsExercises = async () => {
  try {
    for (const workoutExercise of workoutExercises) {
      let sequenceNumber = 1;

      for (const exerciseId of workoutExercise.exercises) {
        await client.query(
          `
                  INSERT INTO workoutExercises(workout_id, exercise_id, sequence_number)
                  VALUES($1, $2, $3);
              `,
          [
            workoutExercise.workout_id,
            exerciseId,
            sequenceNumber
          ]
        );
        sequenceNumber++;
      }
      
    }
    console.log("created workout exercises relationships");
  } catch (error) {
    console.error('Error creating workout exercise relationships:', error)
    throw error;
  }
};

const createInitialFavoriteWorkoutExercises = async () => {
  try {
    for (const favWorkoutExercise of favoriteWorkoutExercises) {
      await client.query(
        `
            INSERT INTO favoriteWorkoutExercises(user_id, workout_id)
            VALUES($1, $2);
        `,
        [favWorkoutExercise.user_id, favWorkoutExercise.workout_id]
      );
    }

    console.log("created favorite workoutExercises!");
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
    await createInitialFavoriteSelfCare();
    await createInitialWorkouts();
    await createInitialWorkoutsExercises();
    await createInitialFavoriteWorkoutExercises();
  } catch (error) {
    console.error(error);
  } finally {
    // close the connection to the local db. will always run
    client.end();
  }
};
buildDb();
