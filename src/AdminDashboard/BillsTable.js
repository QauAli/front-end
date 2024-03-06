// CustomerTable.js
import React,{useEffect,useState} from 'react';
import './CustomerTable.css'

function BillsTable({}) {
    const [bills, setbills] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/bill")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);  // Log the data to inspect the structure
            setbills(data);
          })
          .catch((error) =>
            console.error("Error fetching record:", error)
          );
      }, []);
      
      return (
        <div className='Customer_table'>
          <h1>Bills Record</h1>
          <table className='Customer_table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer_ID</th>
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
                    <td>{data.Customer_id}</td>
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

export default BillsTable;
