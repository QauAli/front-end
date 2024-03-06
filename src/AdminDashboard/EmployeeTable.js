// CustomerTable.js
import React,{useEffect,useState} from 'react';
import './CustomerTable.css'

function EmployeeTable({}) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/staff")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);  // Log the data to inspect the structure
            setEmployees(data);
          })
          .catch((error) =>
            console.error("Error fetching record:", error)
          );
      }, []);
      
      return (
        <div className='Customer_table'>
          <h1>Employee Records</h1>
          <table className='Customer_table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email_id</th>
              </tr>
            </thead>
            <tbody>
              {employees && employees.length > 0 ? (
                employees.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.Staff_Name}</td>
                    <td>{data.Staff_Designation}</td>
                    <td>{data.Staff_Contact}</td>
                    <td>{data.email}</td>
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

export default EmployeeTable;
