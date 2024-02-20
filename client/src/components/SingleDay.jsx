import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCalendarAppointment from './AddCalendarAppointment';
import RemoveCalendarAppointmentButton from './RemoveCalendarAppointmentButton';

function SingleDay({ user_id, date, setAppointments, appointments }) {
  console.log(new Date(date))
  console.log(new Date(2024, 1, 17))
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthIndex = new Date(date).getMonth()
  let month = months[monthIndex]
  let day = (new Date(date).getDate() + 1)
  console.log(date)
  console.log(new Date(date).getDate())
  console.log(new Date(date).getDate()+1)

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let dayIndex = (new Date(date).getDay()+1)
  let dayName = days[dayIndex]
  let year = new Date(date).getFullYear()
  let clickedDate = `${dayName} ${month} ${day}, ${year}`
  const navigate= useNavigate()

  const [modal, setModal] = useState(false)
  
  function toggleAppointmentModal() {
    setModal(!modal)
  }

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
  }, [appointments.length]);


  return (
    <>
    <br/>
      <h2> Events for {clickedDate}</h2> <br/>
      {!appointments.length? (
        <>
          <p >No events scheduled.</p>
        </>
      ) : (
      appointments.map((appointment) => (
        <>
          <h3>{appointment.activity_name}</h3>
          <h3> Time: {appointment.activity_time}</h3>
          <p>{appointment.activity_description}</p>
          <RemoveCalendarAppointmentButton calendar_id={appointment.calendar_id} appointments={appointments} appointment={appointment} setAppointments={setAppointments}/>
          <br/>
          <div className="breakLine"></div>
          <br/>
        </>
      )))}

      <div>
        <button onClick={toggleAppointmentModal}>Add Event</button> 
      </div> <br/>
      <div>
        <button onClick={() => navigate(`/calendar`)}>See Calendar</button> 
      </div>

      {modal ? ( 
      <AddCalendarAppointment  date={date} setAppointments={setAppointments} appointments={appointments} user_id={user_id} toggleAppointmentModal={toggleAppointmentModal}/>
    ) : null}

    </>
  )
}

export default SingleDay;
