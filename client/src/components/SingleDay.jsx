import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCalendarAppointment from './AddCalendarAppointment';

function SingleDay({ user_id, date, setAppointments, appointments }) {
  console.log(new Date(date))
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthIndex = new Date(date).getMonth()
  let month = months[monthIndex]
  let day = (new Date(date).getDate() + 1)

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let dayIndex = (new Date(date).getDay()+1)
  let dayName = days[dayIndex]
  let year = new Date(date).getFullYear()
  let clickedDate = `${dayName} ${month} ${day}, ${year}`
  const navigate= useNavigate()

  useEffect(() => {

    const fetchSingleCalendarDay = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/calendars/${user_id}/${date}`);
        const result = await response.json();
        setAppointments(result);
        console.log(result)
        console.log(appointments)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSingleCalendarDay()
  }, []);


  return (

  !appointments.length? (
    <>
    <h2> {clickedDate}</h2> <br/>
      <p >No events scheduled.</p>
      <div>
        <button onClick={() => {
          navigate(`/calendar`);
        }}>See Calendar</button> 
      </div>
    </>) :
    
   appointments.map((appointment)=> {
    return (
      <>
      <br/>
      <h2>{clickedDate}</h2> <br/>
      <h3>{appointment.activity_name}</h3>
      <h3> {appointment.activity_time}</h3>
      <h3> {appointment.activity_description}</h3>
      <h3> {appointment.activity_link}</h3> 
      <br/>
      <div className="breakLine"></div>
      
      <br/>
      <div>
        <button onClick={() => {
          navigate(`/calendar`);
        }}>See Calendar</button> 
      </div>
      </>
    )})
    
    
    
    )
  }

export default SingleDay


