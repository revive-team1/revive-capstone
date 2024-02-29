import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate }  from 'react-router-dom';

const CalendarDay = ({ userAppointmentsByDay, user_id, day, calendarYear, calendarMonth, setDate }) => {
  const navigate = useNavigate()
  let formattedDay = `${day}`;
  let formattedMonth = `${calendarMonth+1}`;


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
  //deployed app version:
  const currentDateString = new Date(calendarYear, calendarMonth, day-1).toDateString();
  //localHost version:
  // const currentDateString = new Date(calendarYear, calendarMonth, day).toDateString(); 
  const dayClassName = userAppointmentsByDay.some((appt) => new Date(appt.activity_date).toDateString() === currentDateString)
    ? "greenCalendarSquare"
    : "calendar-day";
  return day ? (
    <button id={`day-${day}`} className={dayClassName} onClick={handleClick}>{day}</button>
  ) : (
    <div className="calendar-day"></div>
)};

export default CalendarDay
