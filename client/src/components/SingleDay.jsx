import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCalendarAppointment from './AddCalendarAppointment';
import RemoveCalendarAppointmentButton from './RemoveCalendarAppointmentButton';

function SingleDay({ user_id, date, setAppointments, appointments }) {

  let year = new Date(date).getFullYear()
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthIndex = Number(date.charAt(5)+ date.charAt(6)) - 1
  let month = months[monthIndex]
  let day = date.charAt(8)+ date.charAt(9)

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let dayIndex = (new Date(year, monthIndex, Number(day)).getDay())
  let dayName = days[dayIndex]

  let clickedDate = `${dayName} ${month} ${day}, ${year}`
  
  const navigate= useNavigate()

  function timeToDigits(time) {
    return time.charAt(0)+ time.charAt(1) + time.charAt(3) + time.charAt(4)
  }

  function getFormattedTime(fourDigitTime){
    let hours24 = parseInt(fourDigitTime.substring(0,2));
    let hours = ((hours24 + 11) % 12) + 1;
    let amPm = hours24 > 11 ? 'pm' : 'am';
    let minutes = fourDigitTime.substring(2);
    return hours + ':' + minutes + amPm;
    };

  function sortAppointments(apptsArray) {
    apptsArray.sort((appointment1, appointment2) => {
      const appt1= timeToDigits(appointment1.activity_time)
      const appt2 = timeToDigits(appointment2.activity_time)
      if (appt1 < appt2) {
        return -1;
      }
      if (appt1 > appt2) {
        return 1;
      }
      return 0;
    }); 
    return apptsArray
    }

  

  const [modal, setModal] = useState(false)
  
  function toggleAppointmentModal() {
    setModal(!modal)
  }


  useEffect(() => {

    const fetchSingleCalendarDay = async () => {
      try {
        // const response = await fetch(`http://localhost:8080/api/calendars/${user_id}/${date}`);
        const response = await fetch(`https://revive-capstone.onrender.com/api/calendars/${user_id}/${date}`);
        const result = await response.json();
        setAppointments(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSingleCalendarDay()
  }, [appointments.length]);


  return (
    <>

    <br/>
    <div className="singleDayHeader">
    <h1>Calendar</h1>
    <div className="longBreakLine"></div> <br/>
    </div>
    <br/>
    <div className="singleDayContainer">
    <br/>
      <h2> Events for {clickedDate}</h2>
      <div className="longBreakLine"></div>
      <br/>
      {!appointments.length? (
        <>
          <p >No events scheduled.</p>
        </>
      ) : (
      sortAppointments(appointments).map((appointment) => (
        <>
        <div className="scheduleBlock">
          <h3>{getFormattedTime(timeToDigits(appointment.activity_time))}</h3>
          <h3>{appointment.activity_name}</h3>
          <p>{appointment.activity_description}</p>
          <RemoveCalendarAppointmentButton calendar_id={appointment.calendar_id} appointments={appointments} appointment={appointment} setAppointments={setAppointments}/>
          <br/>
          <div className="breakLine"></div>
          <br/>
        </div>
        </>
      )))}
    
      <div>
        <button className='btn btn-outline-dark' onClick={toggleAppointmentModal}>Add Event</button> 
      </div> <br/>
      <div>
        <button className='btn btn-outline-dark' onClick={() => navigate(`/calendar`)}>Back to Calendar</button> 
        <br/> <br/>
      </div>

      </div>

      {modal ? ( 
      <AddCalendarAppointment date={date} setAppointments={setAppointments} appointments={appointments} user_id={user_id} toggleAppointmentModal={toggleAppointmentModal}/>
    ) : null}

    </>
  )
}

export default SingleDay;
