import React from "react";
import { useEffect, useState } from "react";


function Box() {
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/staff")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStaffMembers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="Box">
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {staffMembers.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: "white" }}>
                {dataObj.Staff_Name}
              </p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default Box;
