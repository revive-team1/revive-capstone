const client = require('../client');

//POST - /api/recipes - create new recipe
async function createRecipe(body) {
    const { name, difficulty, imgUrl, recipe_yield, description } = body;
    try {
        const { rows: [recipes] } = await client.query(`
        INSERT INTO recipes(name, difficulty, recipe_yield, imgUrl, description)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
        `, [name, difficulty, recipe_yield,imgUrl, description]);
        return recipes;
    } catch (error) {
        throw new Error(`POST request did not work ${error.message} :(`)
    }
}

// GET - /api/recipes - get all recipes
async function getAllRecipes() {
    try {
        const { rows: recipes } = await client.query(`
        SELECT * FROM recipes;
        `);
        return recipes;
    } catch (error) {
        console.error('Error getting recipes', error);
        throw new Error(`Failed to get recipes: ${error.message}`)
    }
}

// GET - /api/recipes/:id - get a single recipe by id
async function getRecipeByID(id) {
    try {
        const { rows: [recipes] } = await client.query(`
        SELECT * FROM recipes
        WHERE recipe_id = $1;
        `, [id]);
        return recipes;
    } catch (error) {
        throw new Error(`GET by id request did not work ${error.message} :(`)
    }
}



//PUT - /api/recipes/:id - update a single recipe by id
async function updateRecipeByID(id, fields = {}) {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');
    if (setString.length === 0) {
        return;
    }
    try {
        const { rows: [recipes] } = await client.query(`
        UPDATE recipes
        SET ${setString}
        WHERE recipe_id=${id}
        RETURNING *;
        `, Object.values(fields));
        return recipes;
    } catch (error) {
        throw new Error(`PUT request did not work: ${error.message} :(`);
    }
}

// DELETE - /api/recipes/:id - delete a single recipe by id
async function deleteRecipeByID(id) {
    try {
        const { rows: [recipes] } = await client.query(`
        DELETE FROM recipes
        WHERE recipe_id=$1
        RETURNING *;
        `, [id]);
        return recipes;
    } catch (error) {
        throw new Error(`DELETE request did not work: ${error.message} :(`)
    }
}

module.exports = {
    getAllRecipes, getRecipeByID, createRecipe, updateRecipeByID, deleteRecipeByID
}
