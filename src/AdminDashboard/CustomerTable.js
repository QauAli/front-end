// CustomerTable.js
import React,{useEffect,useState} from 'react';
import './CustomerTable.css'

function CustomerTable({}) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/customer")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);  // Log the data to inspect the structure
            setCustomers(data);
          })
          .catch((error) =>
            console.error("Error fetching record:", error)
          );
      }, []);
      
      return (
        <div className='Customer_table'>
          <h1>Customer Records</h1>
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
              {customers && customers.length > 0 ? (
                customers.map((data) => (
                  <tr key={data.id}>
                    <td>{data.Customer_id}</td>
                    <td>{data.C_FirstName}</td>
                    <td>{data.C_LastName}</td>
                    <td>{data.C_PhoneNo}</td>
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

export default CustomerTable;
