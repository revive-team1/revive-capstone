import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SingleDay({ user_id, date, setAppointments, appointments }) {
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
   appointments.map((appointment)=> {
    return (
      <>
      <h3>{appointment.activity_name}</h3>
      <h3> {appointment.activity_time}</h3>
      </>
    )
   }))
  }

export default SingleDay