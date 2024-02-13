const express = require('express');
const router = express.Router();

const { getAllWorkouts,
    getWorkoutsById,
    createWorkouts,
    updateWorkouts, 
    deleteWorkouts } = require('../db/sqlHelperFunctions/workouts');
const { authRequired } = require('./utils');

//GET - /api/workouts - get all workouts
router.get('/', async (req, res, next) => {
    try {
        const workouts = await getAllWorkouts();
        res.send(workouts);
    } catch(error) {
        next(error);
    }
});

//GET - /api/workouts/:id - get a single workout by id
router.get('/:workout_id', async (req, res, next) => {
    try {
        const workout = await getWorkoutsById(req.params.workout_id);
        res.send(workout);
    } catch (error) {
        next(error);
    }
});

//POST - /api/workouts - create a new workout
router.post('/', async (req, res, next) => {
    try {
        const workout = await createWorkouts(req.body);
        res.send(workout);
    } catch (error) {
        next(error);
    }
});

//PUT - /api/workouts/:id - update a single workout by id
router.put('/:workout_id', async (req, res, next) => {
    try {
        const workout = await updateWorkouts(req.params.workout_id, req.body);
        res.send(workout);
    } catch (error) {
        next(error);
    }
});

//DELETE - /api/workouts/:id - delete a single workout by id
router.delete('/:workout_id', async (req, res, next) => {
    try {
        const workout = await deleteWorkouts(req.params.workout_id);
        res.send(workout);
    } catch (error) {
        next(error);
    }
});

module.exports = router;