import React from 'react'
import { useState } from "react";
import AddCalendarAppointment from './AddCalendarAppointment';
import { useNavigate }  from 'react-router-dom';


const CalendarDay = ({ user_id, day, calendarYear, calendarMonth, setDate }) => {
  const navigate = useNavigate()
  let formattedDay = `${day}`;
  let formattedMonth = `${calendarMonth}`;

  function formatDate() {
    console.log(formattedDay);
    if (formattedDay.length < 2) {
      formattedDay = "0" + formattedDay
    }

    if (formattedMonth.length < 2) {
      formattedMonth = "0" + (calendarMonth + 1)
    }
    let formattedDate = `${calendarYear}-${formattedMonth}-${formattedDay}`
  
    return formattedDate
  }
  function handleClick() {
    const newDate = formatDate();
    setDate(newDate);
    navigate(`/calendar/${user_id}/${newDate}`)
    console.log(newDate);
  }
  return day ? (
    <button className="calendar-day" id={`day-${day}`}onClick={handleClick}
    > {day}</button>
    
  ) : (
    <div className="calendar-day"></div>
   
)};

const Calendars = ({user_id, date, setDate, appointments, setAppointments}) => {

  const currentDate = new Date();
  const [calendarMonth, setCalendarMonth] = useState(currentDate.getMonth())
  const [calendarYear, setCalendarYear] = useState(currentDate.getFullYear());
  const monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1);
  const lastDayOfMonth = new Date(calendarYear, calendarMonth + 1, 0);
 
  const navigate = useNavigate()
 

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
      <p> Click on a date to see your schedule and add events. </p>
      <h3>{monthNames[calendarMonth]} {calendarYear}</h3>
      <div className="breakLine"></div>
      <br/>
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
        {calendarDays.map((day) => <CalendarDay user_id={user_id} day={day} calendarYear={calendarYear} calendarMonth={calendarMonth} setDate={setDate} date={date}/>)}
      </div>
  
      
    <button className="addAppointmentButton" onClick={showPreviousMonth}>Previous Month</button>
    <button className="addAppointmentButton" onClick={showNextMonth}>Next Month</button>
    
   
    <br/> <br/>

    <button className="addAppointmentButton" onClick={toggleAppointmentModal}>Add Event</button>
  
    {modal ? ( 
      <AddCalendarAppointment setAppointments={setAppointments} appointments={appointments}user_id={user_id} toggleAppointmentModal={toggleAppointmentModal}/>
    ) : null}

    </div>
    </>
  )
}

export default Calendars