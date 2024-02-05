const express = require("express");
const router = express.Router();

const {
  getAllCalendarAppointments,
  getCalendarAppointmentById,
  createCalendarAppointment,
  deleteCalendarAppointment,
  updateCalendarAppointment,
} = require("../db/sqlHelperFunctions/calendars.js");

router.get("/", async (req, res, next) => {
  try {
    const appointments = await getAllCalendarAppointments();
    res.send(appointments);
  } catch (error) {
    next(error);
  }
});

router.get("/:calendar_id", async (req, res, next) => {
  try {
    const appointment = await getCalendarAppointmentById(
      req.params.calendar_id
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
