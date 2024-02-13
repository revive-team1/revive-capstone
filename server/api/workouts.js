const express = require('express');
const router = express.Router();

const { getAllWorkouts,
    getWorkoutsById,
    } = require('../db/sqlHelperFunctions/workouts');
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

module.exports = router;