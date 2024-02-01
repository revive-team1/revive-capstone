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

// Create exercises
const createInitialExercises = async () => {
    try {
        for (const exercise of exercises) {
            const {
                rows: [exercise]
            } = await client.query(`
                INSERT INTO exercises(name, description, difficulty, imgUrl)
                VALUES($1, $2, $3, $4);
            `, [exercise.name, exercise.description, exercise.difficulty, exercise.imgUrl]
            )
        }
        console.log("created exercises")
    } catch (error) {
        throw error
    }
}

// Create exercises
const createInitialUsers = async () => {
    try {
        for (const user of users) {
            const {
                rows: [user]
            } = await client.query(`
                INSERT INTO users(firstname, lastname, username, password, email)
                VALUES($1, $2, $3, $4, $5);
            `, [user.firstname, user.lastname, user.username, user.password, user.email]
            )
        }
        console.log("created users")
    } catch (error) {
        throw error
    }
}


// Call all functions to build the db
const buildDb = async () => {
    try {
        // ACTUALLY CONNECT TO THE LOCAL DB
        client.connect()

        // run the functions
        await dropTables()
        await createTables()

        await createInitialExercises()
        await createInitialUsers()
        await createInitialSelfCare()
        await createInitialRecipes()
        await createInitialCalendars()
        await createInitialFavoriteRecipes()
        await createInitialFavoriteExercises()
        
    } catch (error) {
        console.error(error)
    } finally {
        // close the connection to the local db. will always run
        client.end()
    }
}
buildDb()