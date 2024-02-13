const client = require('../client');
const util = require('util');

// GET - /api/workouts - get all workouts
async function getAllWorkouts() {
    try {
        console.log(3)
        const { rows: workouts } = await client.query(`
        SELECT * FROM workouts;
        `);
        return workouts;
    } catch (error) {
        console.error('Error getting workout', error);
        throw new Error(`Failed to get workout: ${error.message}`)
    }
}

// GET - /api/workouts/:id - get a single workouts by id
async function getWorkoutsById(id) {
    try {
        const { rows: [workouts] } = await client.query(`
        SELECT * FROM workouts
        WHERE workout_id = $1;
        `, [id]);
        return workouts;
    } catch (error) {
        throw new Error(`GET by id request did not work ${error.message} :(`)
    }
}

//POST - /api/workouts - create new workout
async function createWorkouts(body) {
    const { name, description, exercise_id1, exercise_id2, exercise_id3, exercise_id4, exercise_id5, exercise_id6, exercise_id7, exercise_id8 } = body;
    try {
        const { rows: [workouts] } = await client.query(`
        INSERT INTO workouts(name, description, exercise_id1, exercise_id2, exercise_id3, exercise_id4, exercise_id5, exercise_id6, exercise_id7, exercise_id8)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
        `, [description, exercise_id1, exercise_id2, exercise_id3, exercise_id4, exercise_id5, exercise_id6, exercise_id7, exercise_id8]);
        return workouts;
    } catch (error) {
        throw new Error(`POST request did not work ${error.message} :(`)
    }
}

//PUT - /api/workouts/:id - update a single workout by id
async function updateWorkouts(id, fields = {}) {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index +1}`).join(', ');
    if(setString.length === 0) {
        return;
    }
    try{
        const { rows: [workouts] } = await client.query(`
        UPDATE workouts
        SET ${setString}
        WHERE workout_id=${id}
        RETURNING *;
        `, Object.values(fields));
        return workouts;
    } catch (error) {
        throw new Error(`PUT request did not work: ${error.message} :(`);
    }
}

// DELETE - /api/workouts/:id - delete a single workout by id
async function deleteWorkouts(id) {
    try {
        const { rows: [workouts] } = await client.query(`
        DELETE FROM workouts
        WHERE workout_id=$1
        RETURNING *;
        `, [id]);
        return workouts;
    } catch (error) {
        throw new Error(`DELETE request did not work: ${error.message} :(`)
    }
}

module.exports = {
    getAllWorkouts,
    getWorkoutsById,
    createWorkouts,
    updateWorkouts, 
    deleteWorkouts
}