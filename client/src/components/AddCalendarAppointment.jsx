import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function AddCalendarAppointment({ setUserAppointmentsByDay, userAppointmentsByDay, date, setAppointments, user_id, toggleAppointmentModal }) {


  const [activity_date, setActivityDate] = useState("");
  const [activity_name, setActivityName] = useState("");
  const [activity_time, setActivityTime] = useState("");
  const [activity_description, setActivityDescription] = useState("");
  const [activity_link, setActivityLink] = useState("");
  const navigate = useNavigate();
  
  async function handleSubmit() {
    // event.preventDefault();
    try {
      // const response = await fetch('http://localhost:8080/api/calendars/', {
      const response = await fetch('https://revive-capstone.onrender.com/api/calendars/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, activity_date, activity_name, activity_time, activity_description, activity_link })
      });
      const result = await response.json();
      console.log(result)
      setAppointments(result)
      setUserAppointmentsByDay([...userAppointmentsByDay, result]);
      toggleAppointmentModal()
      alert("Your appointment has been added.")
    } catch (error) {
    }
  }
  return (
    <> 

    <div id="addAppointmentModal" className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h3>Add Calendar Event</h3>
          <label>
          Date: <input className="appointmentInput" type="date" value={activity_date} onChange={(event) => {
                setActivityDate(event.target.value)
              }}></input>
          </label>
          
          <label>
          Event Name: <input className="appointmentInput" type="text" placeholder="Event Name" value={activity_name}onChange={(event) => {
                setActivityName(event.target.value)
              }}></input>
          </label>

          <label>
          Time: <input className="appointmentInput" type="time" value={activity_time}onChange={(event) => {
                setActivityTime(event.target.value)
              }}></input>
          </label>

          <label>
          Description: <input className="appointmentInput" type="text" placeholder="Event Description" value={activity_description}onChange={(event) => {
                setActivityDescription(event.target.value)
              }}></input>
          </label>

          <button className="modalButton" onClick={handleSubmit}>Add Event</button>
          <button className="modalButton" onClick={toggleAppointmentModal}>Exit</button>
        </div>
        
       
      </div>
      
      </>


    )


}