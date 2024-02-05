const express = require('express');
const router = express.Router();

const { getAllExercises,
    getExercisesById,
    createExercises,
    updateExercises, 
    deleteExercises } = require('../db/sqlHelperFunctions/exercises');
const { authRequired } = require('./utils');

//GET - /api/exercises - get all exercises
router.get('/', async (req, res, next) => {
    try {
        const exercises = await getAllExercises();
        res.send(exercises);
    } catch(error) {
        next(error);
    }
});

//GET - /api/exercises/:id - get a single exercise by id
router.get('/:exercise_id', async (req, res, next) => {
    try {
        const exercise = await getExercisesById(req.params.exercise_id);
        res.send(exercise);
    } catch (error) {
        next(error);
    }
});

//POST - /api/exercises - create a new exercise
router.post('/', async (req, res, next) => {
    try {
        const exercise = await createExercises(req.body);
        res.send(exercise);
    } catch (error) {
        next(error);
    }
});

//PUT - /api/exercises/:id - update a single exercise by id
router.put('/:exercise_id', async (req, res, next) => {
    try {
        const exercise = await updateExercises(req.params.exercise_id, req.body);
        res.send(exercise);
    } catch (error) {
        next(error);
    }
});

//DELETE - /api/exercises/:id - delete a single exercise by id
router.delete('/:exercise_id', async (req, res, next) => {
    try {
        const exercise = await deleteExercises(req.params.exercise_id);
        res.send(exercise);
    } catch (error) {
        next(error);
    }
});

module.exports = router;