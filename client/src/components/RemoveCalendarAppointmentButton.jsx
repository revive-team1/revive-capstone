

export default function RemoveCalendarAppointmentButton({ calendar_id, appointments, appointment, setAppointments }) {

  async function handleClick() {
    try {
      // const response = await fetch(`http://localhost:8080/api/calendars/${calendar_id}`, {
      const response = await fetch(`https://revive-capstone.onrender.com/api/calendars/${calendar_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result)
     
      setAppointments(appointments.filter((appointment) => appointment.calendar_id !== result.calendar_id));
    } catch (error) {
    }
  }
  return (
    <div className="removeButton">
      <button className='btn btn-outline-dark' onClick={() => {
        handleClick();
      }}>Remove Event</button>
    </div>
  );
};