const client = require("../client")

//create new recipe
const createRecipe = async (recipe) => {
    const query = `
INSERT INTO recipes (name, difficulty, recipe_yield, description, imgUrl) VALUES ($1, $2, $3, $4, $5)`
    const values = [recipe.name, recipe.difficulty, recipe.recipe_yield, recipe.description, recipe.imgUrl]
    return client.query(query, values)
}

//get recipe by ID
const getRecipeByID = async (recipeID) => {
    const query = `
    SELECT recipes.recipe_id,
    recipes.name,
    recipes.difficulty,
    recipes.recipe_yield,
    recipes.description,
    recipes.imgUrl,
    
    FROM recipes;
    `
    try {
        const results = await client.query(query)
        return results
    } catch (error) {
        console.error("getRecipeByID error", error)
    }
}

//get all recipes
const getAllRecipes = async (recipeID) => {
    const query = `
    SELECT * FROM recipes;
    `
    try {
        const results = await client.query(query)
        return results
    } catch (error) {
        console.error("getRecipeByID error", error)
    }
}

// update recipe by ID
const updateRecipeByID = async (recipeID, updatedRecipe) => {
    const query = `
        UPDATE recipes
        SET name = $1, difficulty = $2, recipe_yield = $3, description = $4, imgUrl = $5
        WHERE recipe_id = $6
    `;
    const values = [updatedRecipe.name, updatedRecipe.difficulty, updatedRecipe.recipe_yield, updatedRecipe.description, updatedRecipe.imgUrl, recipeID];

    try {
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error("updateRecipeByID error", error);
    }
}

// Delete recipe by ID
const deleteRecipeByID = async (recipeID) => {
    const query = `
        DELETE FROM recipes
        WHERE recipe_id = $1
    `;
    const values = [recipeID];

    try {
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error("deleteRecipeByID error", error);
    }
}



module.exports = { createRecipe, getRecipeByID, getAllRecipes }




