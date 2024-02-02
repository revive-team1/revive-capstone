const express = require("express");
const router = express.Router();

const {
  getAllFavoriteExercises,
  getFavoriteExerciseById,
  addFavoriteExercise,
  deleteFavoriteExercise,
  getFavoriteExercisesByUserId,
} = require("../sqlHelperFunctions/favoriteExercises.js");

router.get("/", async (req, res, next) => {
  try {
    const favoriteExercise = await getAllFavoriteExercises();
    res.send(favoriteExercise);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const favoriteExcercise = await getFavoriteExerciseById(req.params.id);
    res.send(favoriteExcercise);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const favoriteExcercise = await addFavoriteExercise(req.body);
    res.send(favoriteExcercise);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const favoriteExercise = await deleteFavoriteExercise(req.params.id);
    res.send(favoriteExercise);
  } catch (error) {
    next(error);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const favoriteExercise = await getFavoriteExercisesByUserId(req.params.id);
    res.send(favoriteExercise);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
