const client = require('./client');
const { exercises, users, selfCare, recipes, calendars, favoriteRecipes, favoriteExercises } = require('./seedData')

// drop tables for clients, membership, exercises
async function dropTables() {
    try {
        console.log('Dropping All Tables...');
        await client.query(`
      DROP TABLE IF EXISTS exercises CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS recipes CASCADE;
      DROP TABLE IF EXISTS favoriteRecipes CASCADE;
      DROP TABLE IF EXISTS favoriteExercises CASCADE;
      DROP TABLE IF EXISTS calendars CASCADE;
      DROP TABLE IF EXISTS selfCare CASCADE;
    `);
    } catch (error) {
        throw error;
    }
}


async function createTables() {
    try {
        console.log('Building All Tables...');
        await client.query(`
        CREATE TABLE exercises (
            exercise_id SERIAL PRIMARY KEY,
            name TEXT,
            description TEXT,
            "imgUrl" TEXT,
            difficulty TEXT
        );
        CREATE TABLE users (
            users_id SERIAL PRIMARY KEY,
            firstname TEXT,
            lastname TEXT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL, 
            email TEXT UNIQUE NOT NULL
        );
        CREATE TABLE recipes (
            recipe_id SERIAL PRIMARY KEY, 
            name TEXT, 
            difficulty TEXT, 
            recipe_yield TEXT, 
            "imgUrl" TEXT,
            description TEXT
        );
        CREATE TABLE selfCare (
            selfCare_id SERIAL PRIMARY KEY,
            name TEXT, 
            description TEXT, 
            article_url TEXT
        );
        CREATE TABLE calendars (
            calendar_id SERIAL PRIMARY KEY,
            user_id,
            activity_name TEXT,
            activity_description TEXT,
            activity_date DATE,
            activity_time TIME
        );
        CREATE TABLE favorite_recipes (
            favorite_id SERIAL PRIMARY KEY,
            recipe_id INTEGER REFERENCES recipes(recipe_id),
            user_id INTEGER REFERENCES users(user_id)
        );
        CREATE TABLE favorite_exercises (
            favorite_id SERIAL PRIMARY KEY,
            exercise_id INTEGER REFERENCES exercises(exercise_id),
            user_id INTEGER REFERENCES users(user_id)
        );
        `);  
    } catch (error) {
        console.log('error createing tables')
        throw error;
    }

const createInitialSelfCare = async () => {
    try {
        for (const activity of selfCare) {
            await client.query(
                `
                INSERT INTO selfCare(name, description, article_url)
                VALUES($1, $2, $3)
                `,
                [activity.name, activity.description, activity.article_url]
            )
        }
        console.log("created self care!")
    } catch (error) {
        throw error
    }
}

const createInitialRecipes = async () => {
    try {
        for (const recipe of recipes) {
            await client.query(
                `
                INSERT INTO recipes(name, difficulty, recipe_yield, imgUrl)
                VALUES($1, $2, $3, $4)
                `,
                [recipe.name, recipe.difficulty, recipe.recipe_yield, recipe.imgUrl, recipe.description]
            )
        }
        console.log("created recipes!")
    } catch (error) {
        throw error
    }
}
