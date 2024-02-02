const client = require('../client');

// GET - /api/selfCare - get all selfCare
async function getAllSelfCare() {
    try {
        const { rows: selfCare } = await client.query(`SELECT * FROM selfCare`);
        return selfCare;
    } catch (error) {
        throw new Error("error")
    }
}

// GET - /api/selfCare/:selfCare_id - get a single selfCare by id
async function getSelfCareById(id) {
    try {
        const { rows: [selfCare] } = await client.query(`
            SELECT * FROM selfCare
            WHERE selfCare_id = $1;
        `, [id]);
        return selfCare;
    } catch (error) {
        throw error;
    }
}

// POST - /api/selfCare - create a new selfCare
async function createSelfCare(body) {
    try {
        const { rows: [selfCare] } = await client.query(`
        INSERT INTO selfCare(name, description, article_url)
        VALUES($1, $2, $3)
        RETURNING *;
        `, [body.name, body.description, body.article_url]);
        return selfCare;
    } catch (error) {
        throw error;
    }
}
// PUT - /api/selfCare/:selfCare_id - update a single selfCare by id
async function updateSelfCare(id, fields = {}) {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }

    try {
        const { rows: [selfCare] } = await client.query(`
      UPDATE selfCare
      SET ${setString}
      WHERE selfCare_id=${id}
      RETURNING *;
    `, Object.values(fields));

        return selfCare;
    } catch (error) {
        throw error;
    }
}

// DELETE - /api/selfCare/:selfCare_id - delete a single selfCare by id
async function deleteSelfCareById(id) {
    try {
        const { rows: [selfCare] } = await client.query(`
      DELETE FROM selfCare
      WHERE selfCare_id=$1
      RETURNING *;
    `, [id]);
        return selfCare;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllSelfCare,
    getSelfCareById,
    createSelfCare,
    updateSelfCare,
    deleteSelfCareById
}