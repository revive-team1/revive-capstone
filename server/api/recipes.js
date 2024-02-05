const express = require('express')
const router = express.Router()

const { createRecipe, getRecipeByID, getAllRecipes, deleteRecipeByID, updateRecipeByID } = require("../db/sqlHelperFunctions/recipes")
const { authRequired } = require('./utils');


//GET - /api/recipes - get all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await getAllRecipes();
        res.send(recipes);
    } catch(error) {
        next(error);
    }
});

//GET - /api/recipes/:id - get a single recipe by id
router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipe = await getRecipeByID(req.params.recipe_id);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

//POST - /api/recipes - create a new recipe
router.post('/', authRequired, async (req, res, next) => {
    try {
        const recipe = await createRecipe(req.body);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

//PUT - /api/recipes/:id - update a single recipe by id
router.put('/:recipe_id', authRequired, async (req, res, next) => {
    try {
        const recipe = await updateRecipeByID(req.params.recipe_id, req.body);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

//DELETE - /api/recipes/:id - delete a single recipe by id
router.delete('/:recipe_id', authRequired, async (req, res, next) => {
    try {
        const recipe = await deleteRecipeByID(req.params.recipe_id);
        res.send(recipe);
    } catch (error) {
        next(error);
    }
});

module.exports = router;