import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AccountSchedule({ user_id, setTodaysAppointments, todaysAppointments }) {
  let today = new Date()
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthIndex = today.getMonth()
  let monthNumber = monthIndex + 1
  let month = months[monthIndex]
  let day = (today.getDate())

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let dayIndex = (today.getDay())
  let dayName = days[dayIndex]
  let year = today.getFullYear()
  let displayDate = `${dayName} ${month} ${day}, ${year}`
  
  const navigate= useNavigate()
 
  let dayNum = (today.getDate()).toString()
  let monthNum = (today.getMonth() + 1).toString()
  function formatDate(date) {
    if (dayNum.length < 2) {
      dayNum = "0" + dayNum.toString()
    }

    if (monthNum.length < 2) {
      monthNum = "0" + (monthNum.toString())
    }
    let formattedDate = `${year}-${monthNum}-${dayNum}`
  
    return formattedDate
  }

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


  useEffect(() => {

    const fetchTodaysSchedule = async () => {
      try {
        // const response = await fetch(`http://localhost:8080/api/calendars/${user_id}/${formatDate(today)}`);
        const response = await fetch(`https://revive-capstone.onrender.com/api/calendars/${user_id}/${formatDate(today)}`);
        const result = await response.json();
        setTodaysAppointments(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTodaysSchedule()
  }, []);


  return (
    <>
    <br/>
      <h2> Events for {displayDate}</h2>
      <div className="longBreakLine"></div>
      <br/>
      {!todaysAppointments.length? (
        <>
          <p >No events scheduled.</p>
        </>
      ) : (
      sortAppointments(todaysAppointments).map((appointment) => (
        <>
          <h3>{getFormattedTime(timeToDigits(appointment.activity_time))}</h3>
          <h3>{appointment.activity_name}</h3>
          <p>{appointment.activity_description}</p>
          <br/>
          <div className="breakLine"></div>
          <br/>
        </>
      )))}

      <div>
        <button className='btn btn-outline-dark' onClick={() => navigate(`/calendar`)}>Go to Calendar</button> 
      </div>
      <br/> <br/>
      <div className="longBreakLine"></div>
      <br/>
    </>
  )
}

export default AccountSchedule;
