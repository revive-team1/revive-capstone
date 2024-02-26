//import CalendarDay to calendars
//comment out getCalendarApptsById
//remove "appointment" from getApptsbyUserID and replace with rows (use get all calendar appts as reference). In SQL helper functions
//comment out "calendarDays" in calendar
//Create blueSquare class in CSS

import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate }  from 'react-router-dom';


const CalendarDay = ({ userAppointmentsByDay, user_id, day, calendarYear, calendarMonth, setDate }) => {
  const navigate = useNavigate()
  let formattedDay = `${day}`;
  let formattedMonth = `${calendarMonth+1}`;
  
  // useEffect(() => {

  //   const fetchSingleCalendarDay = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8080/api/calendars/${user_id}`);
  //       const result = await response.json();
  //       // const appts = result;
  //       // console.log (appts.filter((appt)=> {
  //       //   return new Date(appt.activity_date).getDate() === day
  //       // }))
  //       setUserAppointmentsByDay(result)
  //       console.log(result)
      
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchSingleCalendarDay()
  // }, []);



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
  const currentDateString = new Date(calendarYear, calendarMonth, day).toDateString();
  const dayClassName = userAppointmentsByDay.some((appt) => new Date(appt.activity_date).toDateString() === currentDateString)
    ? "greenCalendarSquare"
    : "calendar-day";
  return day ? (
    <button id={`day-${day}`} className={dayClassName} onClick={handleClick}>{day}</button>
  ) : (
    <div className="calendar-day"></div>
)};

export default CalendarDay
