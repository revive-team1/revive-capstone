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
  const [calendarMonth, setCalendarMonth] = useState(currentDate.getMonth())
  const [calendarYear, setCalendarYear] = useState(currentDate.getFullYear());
  const monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1);
  const lastDayOfMonth = new Date(calendarYear, calendarMonth + 1, 0);
  console.log(currentDate.getMonth())
 

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

  let nextMonth = new Date(calendarYear, calendarMonth + 1)
  let previousMonth = new Date(calendarYear, calendarMonth - 1)
  console.log(previousMonth.getMonth())
  console.log(calendarYear +1)

  console.log (nextMonth)

  function showNextMonth() {
    if (calendarMonth === 11) {
      setCalendarMonth(nextMonth.getMonth())
      setCalendarYear(calendarYear + 1)
    }
    else {setCalendarMonth(nextMonth.getMonth())
    }
  }

  function showPreviousMonth() {
    if (calendarMonth === 0) {
      setCalendarMonth(previousMonth.getMonth())
      setCalendarYear(calendarYear - 1)
    }
    else {setCalendarMonth(previousMonth.getMonth())
    }
  }

  const [modal, setModal] = useState(false)
  
  function toggleAppointmentModal() {
    setModal(!modal)
  }
  

  
  return (
    <>
    <div className="calendar-card">
      <h1>Calendar</h1>
      <h3>{monthNames[calendarMonth]} {calendarYear}</h3>
      <div id="calendar" className="calendar-grid">
        {calendarDays.map((day) => <CalendarDay day={day} />)}
      </div>

    <button className="addAppointmentButton" onClick={showPreviousMonth}>Previous Month</button>
    <button className="addAppointmentButton" onClick={showNextMonth}>Next Month</button>
    
   
    <br/> <br/>

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