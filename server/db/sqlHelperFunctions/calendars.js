const client = require("../client");

async function getAllCalendarAppointments() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM calendars;
      `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getCalendarAppointmentById(id) {
  try {
    const {
      rows: [appointment],
    } = await client.query(
      `
          SELECT * FROM calendars
          WHERE calendars.calendar_id = $1;
      `,
      [id]
    );
    return appointment;
  } catch (error) {
    throw error;
  }
}

async function getCalendarAppointmentsByUserId(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM calendars
          WHERE calendars.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserAppointmentsByDate(id, date) {
  try {
    const {
      rows: appointments,
    } = await client.query(
      `
          SELECT * FROM calendars
          WHERE calendars.user_id = $1 AND calendars.activity_date = $2
      `,
      [id, `'${date}'`]
    );
    return appointments;
  } catch (error) {
    throw error;
  }
}

async function getCalendarAppointmentsByDate(date) {
  try {
    const {
      rows: [appointment],
    } = await client.query(
      `
          SELECT * FROM calendars
          WHERE calendars.activity_date = $1;
      `,
      [`'${date}'`]
    );
    return appointment;
  } catch (error) {
    throw error;
  }
}

async function createCalendarAppointment(body) {
  const {
    user_id,
    activity_date,
    activity_name,
    activity_time,
    activity_description,
    activity_link,
  } = body;
  try {
    const {
      rows: [appointment],
    } = await client.query(
      `
          INSERT INTO calendars(user_id, activity_date, activity_name, activity_time, activity_description, activity_link)
          VALUES($1, $2, $3, $4, $5, $6)
          RETURNING *;
      `,
      [
        user_id,
        activity_date,
        activity_name,
        activity_time,
        activity_description,
        activity_link,
      ]
    );
    return appointment;
  } catch (error) {
    throw error;
  }
}

async function deleteCalendarAppointment(id) {
  try {
    const {
      rows: [appointment],
    } = await client.query(
      `
        DELETE FROM calendars
        WHERE calendar_id = $1
        RETURNING *;
      `,
      [id]
    );
    return appointment;
  } catch (error) {
    throw error;
  }
}

async function updateCalendarAppointment(id, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [appointments],
    } = await client.query(
      `
      UPDATE calendars
      SET ${setString}
      WHERE calendar_id=${id}
      RETURNING *;
      `,
      Object.values(fields)
    );
    return appointments;
  } catch (error) {
    throw new Error(`PUT request did not work: ${error.message} :(`);
  }
}

module.exports = {
  getAllCalendarAppointments,
  getCalendarAppointmentById,
  getCalendarAppointmentsByDate,
  createCalendarAppointment,
  deleteCalendarAppointment,
  updateCalendarAppointment,
  getCalendarAppointmentsByUserId,
  getUserAppointmentsByDate,
};
