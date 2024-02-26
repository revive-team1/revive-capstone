const express = require("express");
const router = express.Router();

const {
  getAllCalendarAppointments,
  getCalendarAppointmentById,
  getCalendarAppointmentsByDate,
  createCalendarAppointment,
  deleteCalendarAppointment,
  updateCalendarAppointment,
  getCalendarAppointmentsByUserId,
  getUserAppointmentsByDate,
} = require("../db/sqlHelperFunctions/calendars.js");

const { authRequired } = require("./utils");

router.get("/", async (req, res, next) => {
  try {
    const appointments = await getAllCalendarAppointments();
    res.send(appointments);
  } catch (error) {
    next(error);
  }
});


router.get("/date/:date", async (req, res, next) => {
  try {
    const appointment = await getCalendarAppointmentsByDate(req.params.date);
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.get("/:user_id/:date", async (req, res, next) => {
  try {
    const appointment = await getUserAppointmentsByDate(
      req.params.user_id,
      req.params.date
    );
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const appointment = await getCalendarAppointmentsByUserId(
      req.params.user_id
    );
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const appointment = await createCalendarAppointment(req.body);
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.delete("/:calendar_id", async (req, res, next) => {
  try {
    const appointment = await deleteCalendarAppointment(req.params.calendar_id);
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.put("/:calendar_id", authRequired, async (req, res, next) => {
  try {
    const appointment = await updateCalendarAppointment(
      req.params.calendar_id,
      req.body
    );
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
