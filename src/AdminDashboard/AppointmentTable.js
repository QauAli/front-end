// AppointmentTable.js
import React,{useEffect,useState} from 'react';
import './CustomerTable.css'

function AppointmentTable({}) {
    const [appointments, setappointments] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/appointment")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);  // Log the data to inspect the structure
            setappointments(data);
          })
          .catch((error) =>
            console.error("Error fetching record:", error)
          );
      }, []);
      
      return (
        <div className='Customer_table'>
          <h1>Appointments Records</h1>
          <table className='Customer_table'>
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Customer Email Id</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((data) => (
                  <tr key={data.id}>
                    <td>{data.Appointment_id}</td>
                    <td>{data.Appointment_Date}</td>
                    <td>{data.Appointment_Time}</td>
                    <td>{data.City}</td>
                    <td>{data.C_Email_Id}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
}

export default AppointmentTable;
