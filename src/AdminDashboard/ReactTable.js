import React, { useState } from "react";
import "./ReactTable.css";
import Addform from "./Addform";
import Viewform from "./Viewform";
import CustomerTable from "./CustomerTable";

function ReactTable() {
  const data = [
    { fname: "Customers" },
    { fname: "Empolyees" },
    { fname: "Appointments" },
    { fname: "Bills" },
    { fname: "Services" },
    {fname: "CustomerTable"},
  ];

  const [showAddform, setShowAddform] = useState(false);
  const [showUpdateform, setShowUpdateform] = useState(false);
  const [showViewform, setShowViewform] = useState(false);
  const [showDeleteform, setShowDeleteform] = useState(false);


  return (
    <div className="react-table">
     
      <table>
      <h4 id="operations">Operations</h4>
        <thead>
          <tr>
            <th>Name</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={i}>
              <td>{val.fname}</td>
              <td>
                <button
                  className="table-button"
                  onClick={() => setShowAddform(true)}
                >
                  Add
                </button>
                <button
                  className="table-button"
                  onClick={() => setShowUpdateform(true)}
                >
                  Update
                </button>
                <button
                  className="table-button"
                  onClick={() => setShowViewform(true)}
                >
                  View
                </button>
                <button
                  className="table-button"
                  onClick={() => setShowDeleteform(true)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddform && (
        <div className="popup-form">
          <Addform />
          <span className="close-icon" onClick={() => setShowAddform(false)}>x</span>
           <button type='submit' className="Addbutton">Add</button>
        </div>
      )}

      {showUpdateform && (
        <div className="popup-form">
          <Addform /> 
          {/* beacuse add form contains the same fileds as i used in add form */}
          <span className="close-icon" onClick={() => setShowUpdateform(false)}>x</span>
          <button type='submit' className="Addbutton">Update</button>
        </div>
      )}

      {showViewform && (
        <div className="popup-form">
          <Viewform />
          <span className="close" onClick={() => setShowViewform(false)}>x</span>
          <button type='submit' className="Addbutton">View</button>
        </div>
      )}

      {showDeleteform && (
        <div className="popup-form">
          {/* because delete form uses the same fields as view form uses so that's why i cannot make another form for delete */}
          <Viewform />
          <span className="close" onClick={() => setShowDeleteform(false)}>x</span>
          <button type='submit' className="Addbutton">Delete</button>
        </div>
        
      )}
    </div>
  );
}

export default ReactTable;
