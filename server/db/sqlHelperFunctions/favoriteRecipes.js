const client = require("../client");

async function getAllFavoriteRecipes() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM favoriteRecipes;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getFavoriteRecipeById(id) {
  try {
    const {
      rows: [favoriteRecipe],
    } = await client.query(
      `
          SELECT * FROM favoriteRecipes
          WHERE favorite_id = $1;
      `,
      [id]
    );
    return favoriteRecipe;
  } catch (error) {
    throw error;
  }
}

async function addFavoriteRecipe(body) {
  const { user_id, recipe_id } = body;
  try {
    const {
      rows: [favoriteRecipe],
    } = await client.query(
      `
          INSERT INTO favoriteRecipes (user_id, recipe_id)
          VALUES($1, $2)
          RETURNING *;
      `,
      [user_id, recipe_id]
    );
    return favoriteRecipe;
  } catch (error) {
    throw error;
  }
}

async function deleteFavoriteRecipe(id) {
  try {
    const {
      rows: [favoriteRecipes],
    } = await client.query(
      `
          DELETE FROM favoriteRecipes
          WHERE favorite_id = $1
          RETURNING *;
      `,
      [id]
    );
    return favoriteRecipes;
  } catch (error) {
    throw error;
  }
}

async function getFavoriteRecipesByUserId(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM recipes
          INNER JOIN favoriteRecipes
          ON favoriteRecipes.recipe_id = recipes.recipe_id
          WHERE favoriteRecipes.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllFavoriteRecipes,
  getFavoriteRecipeById,
  addFavoriteRecipe,
  deleteFavoriteRecipe,
  getFavoriteRecipesByUserId,
};
