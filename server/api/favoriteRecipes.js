const express = require("express");
const router = express.Router();

const {
  getAllFavoriteRecipes,
  getFavoriteRecipeById,
  addFavoriteRecipe,
  deleteFavoriteRecipe,
  getFavoriteRecipesByUserId,
} = require("../db/sqlHelperFunctions/favoriteRecipes.js");

router.get("/", async (req, res, next) => {
  try {
    const favoriteRecipes = await getAllFavoriteRecipes();
    res.send(favoriteRecipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:favorite_id", async (req, res, next) => {
  try {
    const favoriteRecipe = await getFavoriteRecipeById(req.params.favorite_id);
    res.send(favoriteRecipe);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const favoriteRecipe = await addFavoriteRecipe(req.body);
    res.send(favoriteRecipe);
  } catch (error) {
    next(error);
  }
});

router.delete("/:favorite_id", async (req, res, next) => {
  try {
    const favoriteRecipe = await deleteFavoriteRecipe(req.params.favorite_id);
    res.send(favoriteRecipe);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:user_id", async (req, res, next) => {
  try {
    const favoriteRecipes = await getFavoriteRecipesByUserId(
      req.params.user_id
    );
    res.send(favoriteRecipes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
