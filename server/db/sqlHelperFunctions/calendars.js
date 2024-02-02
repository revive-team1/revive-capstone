const client = require("../client");
// const util = require("../util");

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
      [appointment]
    );
    return;
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
      WHERE id=${id}
      RETURNING *;
      `,
      Object.values(fields)
    );
    return calendars;
  } catch (error) {
    throw new Error("PUT request did not work, try again :(");
  }
}

module.exports = {
  getAllCalendarAppointments,
  getCalendarAppointmentById,
  createCalendarAppointment,
  deleteCalendarAppointment,
  updateCalendarAppointment,
};
