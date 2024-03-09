// CustomerTable.js
import React,{useEffect,useState} from 'react';
import './CustomerTable.css'
import arrays from "../variables/globals";

function My_bills({}) {
    const [bills, setbills] = useState([]);

    useEffect(() => {
        // Check if the user is logged in
        if (arrays.isLoggedin) {
          // Fetch bills for the logged-in customer using POST method
          fetch('http://127.0.0.1:5000/my_bills', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers if needed
            },
            body: JSON.stringify({
              email: arrays.email,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setBills(data);
            })
            .catch((error) =>
              console.error('Error fetching bills:', error)
            );
        }
      }, [arrays.isLoggedin, arrays.email]); // Add arrays.isLoggedin and arrays.email to dependency array
     
      
      return (
        <div className='Customer_table'>
          <h1>Bills Record</h1>
          <table className='Customer_table'>
            <thead>
              <tr>
                <th>Bill_ID</th>
                <th>Email_ID</th>
                <th>Service id</th>
                <th>Bill Date</th>
                <th>Bill Amount</th>
                
                
              </tr>
            </thead>
            <tbody>
              {bills && bills.length > 0 ? (
                bills.map((data) => (
                  <tr key={data.id}>
                    <td>{data.Bill_id}</td>
                    <td>{data.C_Email_Id}</td>
                    <td>{data.Service_id}</td>
                    <td>{data.Bill_date}</td>
                    <td>{data.B_amount}</td>
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

export default My_bills;
