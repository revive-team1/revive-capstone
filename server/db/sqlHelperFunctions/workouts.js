const client = require('../client');
const util = require('util');

// GET - /api/workouts - get all workouts
async function getAllWorkouts() {
    try {
        console.log(3)
        const { rows } = await client.query(`
        SELECT workouts.workout_id, workouts.workout_name, workouts.workout_description, workouts.workout_image, exercises.exercise_id, exercises.name, exercises.description, exercises.imgUrl, exercises.difficulty, workoutExercises.sequence_number
        FROM workouts
        JOIN workoutExercises ON workouts.workout_id = workoutExercises.workout_id
        JOIN exercises ON workoutExercises.exercise_id = exercises.exercise_id
        ORDER BY workouts.workout_id, workoutExercises.sequence_number;
        `);
        // Group exercises by workout
        const workouts = {};
        rows.forEach(row => {
            if (!workouts[row.workout_id]) {
                workouts[row.workout_id] = {
                    workout_id: row.workout_id,
                    workout_name: row.workout_name,
                    workout_description: row.workout_description,
                    workout_image: row.workout_image,
                    exercises: []
                };
            }
            workouts[row.workout_id].exercises.push({
                exercise_id: row.exercise_id,
                name: row.name,
                description: row.description,
                imgUrl: row.imgUrl,
                difficulty: row.difficulty,
                sequence_number: row.sequence_number
            });
        });

        const workoutsArray = Object.values(workouts);

        return workoutsArray;
    } catch (error) {
        console.error('Error getting workout', error);
        throw new Error(`Failed to get workout: ${error.message}`)
    }
}

// GET - /api/workouts/:id - get a single workouts by id
async function getWorkoutsById(workoutId) {
    try {
        const { rows } = await client.query(`
            SELECT workouts.workout_id, workouts.workout_name, workouts.    workout_description, exercises.exercise_id, exercises.name, exercises.description, exercises.imgUrl, exercises.difficulty,workoutExercises.sequence_number
            FROM workouts
            JOIN workoutExercises ON workouts.workout_id = workoutExercises.workout_id
            JOIN exercises ON workoutExercises.exercise_id = exercises.exercise_id
            WHERE workouts.workout_id = $1
            ORDER BY workoutExercises.sequence_number;
        `, [workoutId]);

        if (rows.length === 0) {
            return null; 
        }
        const workout = {
            workout_id: rows[0].workout_id,
            workout_name: rows[0].workout_name,
            workout_description: rows[0].workout_description,
            exercises: rows.map(row => ({
                exercise_id: row.exercise_id,
                name: row.name,
                description: row.description,
                imgUrl: row.imgUrl,
                difficulty: row.difficulty,
                sequence_number: row.sequence_number
            }))
        };

        return workout;
    } catch (error) {
        console.error('Error getting workout by ID', error);
        throw new Error(`Failed to get workout by ID: ${error.message}`);
    }
}

module.exports = {
    getAllWorkouts,
    getWorkoutsById,
}