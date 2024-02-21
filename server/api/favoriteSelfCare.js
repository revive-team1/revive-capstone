const express = require("express");
const router = express.Router();

const {
    getAllFavoriteSelfCare,
    getFavoriteSelfCareById,
    addFavoriteSelfCare,
    deleteFavoriteSelfCare,
    getFavoriteSelfCareByUserId,
} = require("../db/sqlHelperFunctions/favoriteSelfCare");

router.get("/", async (req, res, next) => {
  try {
    const favoriteSelfCare = await getAllFavoriteSelfCare();
    res.send(favoriteSelfCare);
  } catch (error) {
    next(error);
  }
});

router.get("/:favorite_id", async (req, res, next) => {
  try {
    const favoriteSelfCare = await getFavoriteSelfCareById(req.params.favorite_id);
    res.send(favoriteSelfCare);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const favoriteSelfCare = await addFavoriteSelfCare(req.body);
    res.send(favoriteSelfCare);
  } catch (error) {
    next(error);
  }
});

router.delete("/:favorite_id", async (req, res, next) => {
  try {
    const favoriteSelfCare = await deleteFavoriteSelfCare(req.params.favorite_id);
    res.send(favoriteSelfCare);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:user_id", async (req, res, next) => {
  try {
    const favoriteSelfCare = await getFavoriteSelfCareByUserId(
      req.params.user_id
    );
    res.send(favoriteSelfCare);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
