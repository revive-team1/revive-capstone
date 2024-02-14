import React from 'react'
import { useState } from "react";

const CalendarDay = ({ day }) => {
  return day ? (
    <div className="calendar-day" id={`day-${day}`}>{day}</div>
  ) : (
    <div></div>
)};

const Calendars = () => {

  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();


  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayOfWeek = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();
  const calendarDays = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    const blankDay = null;
    calendarDays.push(blankDay);
  }

  for (let day = 1; day <= totalDays; day++) {
    calendarDays.push(day);
  }


  const [modal, setModal] = useState(false)
  
  function toggleAppointmentModal() {
    setModal(!modal)
  }
  

  
  return (
    <>
    <div className="calendar-card">
      <h1>Calendar</h1>
      <div id="calendar" className="calendar-grid">
        {calendarDays.map((day) => <CalendarDay day={day} />)}
      </div>
   

    <button className="addAppointmentButton" onClick={toggleAppointmentModal}>Add Event</button>
  
    {modal ? (
      <div id="addAppointmentModal" className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h3>Add Calendar Event</h3>
          <label>
          Date: <input className="appointmentInput" type="date"></input>
          </label>
          
          <label>
          Event Name: <input className="appointmentInput" type="text" placeholder="Event Name"></input>
          </label>

          <label>
          Time: <input className="appointmentInput" type="time"></input>
          </label>

          <label>
          Description: <input className="appointmentInput" type="text" placeholder="Appointment Description"></input>
          </label>

          <label>
          Link: <input className="appointmentInput" type="text" placeholder="Link"></input>
          </label>

          <button className="modalButton" onClick={toggleAppointmentModal}>Add Event</button>
        </div>
      </div>
    ) : null}

    </div>
    </>
  )
}

export default Calendars