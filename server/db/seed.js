const client = require('./client');

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