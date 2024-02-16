import React from 'react'
import { useState } from "react";
import AddCalendarAppointment from './AddCalendarAppointment';

const CalendarDay = ({ day }) => {
  return day ? (
    <div className="calendar-day" id={`day-${day}`}>{day}</div>
  ) : (
    <div></div>
)};

const Calendars = ({user_id}) => {

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
      <div className="dayNames"> 
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>

      <div id="calendar" className="calendar-grid">
        {calendarDays.map((day) => <CalendarDay day={day} />)}
      </div>
  
      
    <button className="addAppointmentButton" onClick={showPreviousMonth}>Previous Month</button>
    <button className="addAppointmentButton" onClick={showNextMonth}>Next Month</button>
    
   
    <br/> <br/>

    <button className="addAppointmentButton" onClick={toggleAppointmentModal}>Add Event</button>
  
    {modal ? ( 
      <AddCalendarAppointment user_id={user_id} toggleAppointmentModal={toggleAppointmentModal}/>
    ) : null}

    </div>
    </>
  )
}

export default Calendars