// CustomerTable.js
import React,{useEffect,useState} from 'react';
import './CustomerTable.css'

function ServicesTable({}) {
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/services")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);  // Log the data to inspect the structure
            setservices(data);
          })
          .catch((error) =>
            console.error("Error fetching record:", error)
          );
      }, []);
      
      return (
        <div className='Customer_table'>
          <h1>Service Record</h1>
          <table className='Customer_table'>
            <thead>
              <tr>
                <th>Service_ID</th>
                <th>Service Name</th>
                <th>Employee_ID</th>
              </tr>
            </thead>
            <tbody>
              {services && services.length > 0 ? (
                services.map((data) => (
                  <tr key={data.id}>
                    <td>{data.Service_Id}</td>
                    <td>{data.Service_name}</td>
                    <td>{data.id}</td>
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

export default ServicesTable;
