const express = require("express");
const router = express.Router();

const {
  getAllCalendarAppointments,
  getCalendarAppointmentById,
  createCalendarAppointment,
  deleteCalendarAppointment,
  updateCalendarAppointment,
} = require("../sqlHelperFunctions/calendars.js");

router.get("/", async (req, res, next) => {
  try {
    const appointments = await getAllCalendarAppointments();
    res.send(appointments);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const appointment = await getCalendarAppointmentById(req.params.id);
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

router.delete("/:id", async (req, res, next) => {
  try {
    const appointment = await deleteCalendarAppointment(req.params.id);
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authRequired, async (req, res, next) => {
  try {
    const appointment = await updateCalendarAppointment(
      req.params.id,
      req.body
    );
    res.send(appointment);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
