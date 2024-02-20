import React, { useState, useEffect } from "react";
import { BsPeopleFill } from "react-icons/bs";
import "./Dashboard.css";
import Numbercounter from "number-counter";
function Home() {
  const [totalCustomers, setTotalCustomers] = useState(null);
  const [totalEmployees, setTotalEmployees] = useState(null);
  const [totalServices, setTotalServices] = useState(null);
  const [totalBills, setTotalBills] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/total_customers")
      .then((response) => response.json())
      .then((data) => setTotalCustomers(data.total_customers))
      .catch((error) =>
        console.error("Error fetching total customers:", error));
        
    // Fetch total employees
    fetch("http://127.0.0.1:5000/total_staff")
      .then((response) => response.json())
      .then((data) => setTotalEmployees(data.total_staff_members))
      .catch((error) =>
        console.error("Error fetching total staff members:", error));

    // Fetch total bills
    fetch("http://127.0.0.1:5000/total_bills")
      .then((response) => response.json())
      .then((data) => setTotalBills(data.total_bills))
      .catch((error) => console.error("Error fetching total bills:", error));

//fetch total services provided
  fetch("http://127.0.0.1:5000/total_services")
    .then((response) => response.json())
    .then((data) => setTotalServices(data.total_services_provided))
    .catch((error) => console.error("Error fetching total services:", error));
}, []);

  

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 id="dashboard">DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>SERVICES</h3>
            <i class="fa-solid fa-gears"></i>
          </div>
          <h1>
            {totalServices !== null ? (
              <Numbercounter
                end={totalServices}
                start={1}
                delay="4"
                preFix="+"
              />
            ) : (
              "Loading..."
            )}
          </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>BILLS</h3>
            <i class="fa-regular fa-paste"></i>
          </div>
          <h1>
            {totalBills !== null ? (
              <Numbercounter end={totalBills} start={1} delay="4" preFix="+" />
            ) : (
              "Loading..."
            )}
          </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>
            {totalCustomers !== null ? (
              <Numbercounter
                end={totalCustomers}
                start={1}
                delay="4"
                preFix="+"
              />
            ) : (
              "Loading..."
            )}
          </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>EMPLOYEES</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>
            {totalEmployees !== null ? (
              <Numbercounter
                end={totalEmployees}
                start={1}
                delay="4"
                preFix="+"
              />
            ) : (
              "Loading..."
            )}
          </h1>
        </div>
      </div>
    </main>
  );
}
export default Home;
