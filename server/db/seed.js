const client = require('./client');
const { exercises, users, selfcare, recipes, calendar, favoriteRecipes, favoriteExercises } = require('./seedData')

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
      DROP TABLE IF EXISTS calendar CASCADE;
      DROP TABLE IF EXISTS selfcare CASCADE;
    `);
    } catch (error) {
        throw error;
    }
}

// self care and recipes and create


const createIntiialSelfCare = async () => {
    try {
        for (const activity of selfCare) {
            await client.query(
                `
                `,
                [activity.name, activity.description, activity.article_url]
            )
        }
        console.log("created self care!")
    } catch (error) {
        throw error
    }
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










}