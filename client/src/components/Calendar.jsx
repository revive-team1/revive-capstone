import React from 'react'
import { useState, useEffect } from "react";
import AddCalendarAppointment from './AddCalendarAppointment';
import { useNavigate }  from 'react-router-dom';
import CalendarDay from './CalendarDay';

const Calendar = ({user_id, date, setDate, appointments, setAppointments}) => {

  const currentDate = new Date();
  const [calendarMonth, setCalendarMonth] = useState(currentDate.getMonth())
  const [calendarYear, setCalendarYear] = useState(currentDate.getFullYear());
  const [userAppointmentsByDay, setUserAppointmentsByDay] = useState([])
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

  useEffect(() => {

    const fetchSingleCalendarDay = async () => {
      try {
        if (user_id) {
          // const response = await fetch(`http://localhost:8080/api/calendars/${user_id}`);
          const response = await fetch(`https://revive-capstone.onrender.com/api/calendars/${user_id}`);
          const result = await response.json();
          setUserAppointmentsByDay(result);
        }
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchSingleCalendarDay()
  }, [user_id]);
  
  
  return (
    <>
    <div className="calendar-card"> 
    <br/> <br/> <br/> <br/>
      <h1 className='m-4'>Calendar</h1>
      <div className="longBreakLine"></div> <br/>
      <p className="calendarHeading"> Click on a date to see your schedule and add events. </p>
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
        {calendarDays.map((day) => <CalendarDay userAppointmentsByDay={userAppointmentsByDay} user_id={user_id} day={day} calendarYear={calendarYear} calendarMonth={calendarMonth} setDate={setDate} date={date}/>)}
      </div>
  
      
    <button className="addAppointmentButton btn btn-outline-dark" onClick={showPreviousMonth}>Previous Month</button>
    <button className="addAppointmentButton btn btn-outline-dark" onClick={showNextMonth}>Next Month</button>
    
   
    <br/> <br/>

    <button className="addAppointmentButton btn btn-outline-dark" onClick={toggleAppointmentModal}>Add Event</button>
  
    {modal ? ( 
      <AddCalendarAppointment
        setUserAppointmentsByDay={setUserAppointmentsByDay}
        userAppointmentsByDay={userAppointmentsByDay}
        setAppointments={setAppointments}
        appointments={appointments}
        user_id={user_id}
        toggleAppointmentModal={toggleAppointmentModal}
      />
    ) : null}

    </div>
    </>
  )
}

export default Calendar;