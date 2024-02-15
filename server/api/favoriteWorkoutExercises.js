const express = require("express");
const router = express.Router();

const {
  getAllFavoriteWorkoutExercises,
  getFavoriteWorkoutExerciseById,
  addFavoriteWorkoutExercise,
  deleteFavoriteWorkoutExercise,
  getFavoriteWorkoutExercisesByUserId,
} = require("../db/sqlHelperFunctions/favoriteWorkoutExercises.js");

router.get("/", async (req, res, next) => {
  try {
    const favoriteWorkoutExercise = await getAllFavoriteWorkoutExercises();
    res.send(favoriteWorkoutExercise);
  } catch (error) {
    next(error);
  }
});

router.get("/:favorite_id", async (req, res, next) => {
  try {
    const favoriteWorkoutExcercise = await getFavoriteWorkoutExerciseById(
      req.params.favorite_id
    );
    res.send(favoriteWorkoutExcercise);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const favoriteWorkoutExcercise = await addFavoriteWorkoutExercise(req.body);
    res.send(favoriteWorkoutExcercise);
  } catch (error) {
    next(error);
  }
});

router.delete("/:favorite_id", async (req, res, next) => {
  try {
    const favoriteWorkoutExercise = await deleteFavoriteWorkoutExercise(
      req.params.favorite_id
    );
    res.send(favoriteWorkoutExercise);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:user_id", async (req, res, next) => {
  try {
    const favoriteWorkoutExercise = await getFavoriteWorkoutExercisesByUserId(
      req.params.user_id
    );
    res.send(favoriteWorkoutExercise);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
