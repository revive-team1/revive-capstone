const client = require("../client");

//POST - /api/users/register - create new user
async function createUser(body) {
  const { firstname, lastname, username, password, email } = body;
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        INSERT INTO users(firstname, lastname, username, password, email)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
        `,
      [firstname, lastname, username, password, email]
    );
    return users;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

async function getAllUsers() {
  try {
    const { rows: users } = await client.query(`
        SELECT * FROM users;
        `);
    return users;
  } catch (error) {
    throw new Error(`GET request did not work because ${error.message} :(`);
  }
}
async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE users.user_id = $1;
      `,
      [id]
    );
    return user;
  } catch (error) {
    throw new Error(`GET request did not work because ${error.message} :(`);
  }
}

async function getUserByEmail(email) {
  try {
    const { rows: user } = await client.query(`
        SELECT * FROM users
        WHERE users.email = '${email}'
        `);
    return user;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw new Error(`Failed to login user: ${error.message}`);
  }
}

async function getUserByUsername(username) {
    try {
        const { rows: user } = await client.query(`
        SELECT * FROM users
        WHERE users.username = '${username}'
        `);
        return user;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw new Error(`Failed to login user: ${error.message}`);
    }
};

async function deleteUser(id) {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        DELETE FROM users
        WHERE id=$1
        RETURNING *;
        `,
      [id]
    );
  } catch (error) {
    throw new Error(`Failed to Delete user because ${error.message}`);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  deleteUser,
};
