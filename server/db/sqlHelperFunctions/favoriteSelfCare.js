const client = require("../client");

async function getAllFavoriteSelfCare() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM favoriteSelfCare;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getFavoriteSelfCareById(id) {
  try {
    const {
      rows: [favoriteSelfCare],
    } = await client.query(
      `
          SELECT * FROM favoriteSelfCare
          WHERE favorite_id = $1;
      `,
      [id]
    );
    return favoriteSelfCare;
  } catch (error) {
    throw error;
  }
}

async function addFavoriteSelfCare(body) {
  const { user_id, selfCare_id } = body;
  try {
    const {
      rows: [favoriteSelfCare],
    } = await client.query(
      `
          INSERT INTO favoriteSelfCare (user_id, selfCare_id)
          VALUES($1, $2)
          RETURNING *;
      `,
      [user_id, selfCare_id]
    );
    return favoriteSelfCare;
  } catch (error) {
    throw error;
  }
}

async function deleteFavoriteSelfCare(id) {
  try {
    const {
      rows: [favoriteSelfCare],
    } = await client.query(
      `
          DELETE FROM favoriteSelfCare
          WHERE favorite_id = $1
          RETURNING *;
      `,
      [id]
    );
    return favoriteSelfCare;
  } catch (error) {
    throw error;
  }
}

async function getFavoriteSelfCareByUserId(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM selfCare
          INNER JOIN favoriteSelfCare
          ON favoriteSelfCare.selfCare_id = selfCare.selfCare_id
          WHERE favoriteSelfCare.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    getAllFavoriteSelfCare,
    getFavoriteSelfCareById,
    addFavoriteSelfCare,
    deleteFavoriteSelfCare,
    getFavoriteSelfCareByUserId,
};
