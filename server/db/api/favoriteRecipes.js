const express = require("express");
const router = express.Router();

const {
  getAllFavoriteRecipes,
  getFavoriteRecipeById,
  addFavoriteRecipe,
  deleteFavoriteRecipe,
  getFavoriteRecipesByUserId,
} = require("../sqlHelperFunctions/favoriteRecipes.js");

router.get("/", async (req, res, next) => {
  try {
    const favoriteRecipes = await getAllFavoriteRecipes();
    res.send(favoriteRecipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const favoriteRecipe = await getFavoriteRecipeById(req.params.id);
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

router.delete("/:id", async (req, res, next) => {
  try {
    const favoriteRecipe = await deleteFavoriteRecipe(req.params.id);
    res.send(favoriteRecipe);
  } catch (error) {
    next(error);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const favoriteRecipes = await getFavoriteRecipesByUserId(req.params.id);
    res.send(favoriteRecipes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
