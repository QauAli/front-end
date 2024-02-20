import React, { useState, useEffect } from "react";
import "./Front.css";
import Numbercounter from "number-counter"; //this is package install
import background from "../images/background.png";
import { motion } from "framer-motion"; //this library is used for adding motion in
import { Link } from "react-router-dom";
const Front = () => {
  const transition = { type: "spring", duration: 3 }; //this handles the transition in the best mechanics div
  const [totalCustomers, setTotalCustomers] = useState(null);
  const [totalEmployees, setTotalEmployees] = useState(null);
  const [totalServices, setTotalServices] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/total_customers")
      .then((response) => response.json())
      .then((data) => setTotalCustomers(data.total_customers))
      .catch((error) =>
        console.error("Error fetching total customers:", error)
      );

    // Fetch total employees
    fetch("http://127.0.0.1:5000/total_staff")
      .then((response) => response.json())
      .then((data) => setTotalEmployees(data.total_staff_members))
      .catch((error) =>
        console.error("Error fetching total staff members:", error)
      );

    //fetch total services provided
    fetch("http://127.0.0.1:5000/total_services")
      .then((response) => response.json())
      .then((data) => setTotalServices(data.total_services_provided))
      .catch((error) => console.error("Error fetching total services:", error));
  }, []);

  
  return (
    <div className="front">
      <div className="small-text">
        <h3 className="fh">
          Welcome to Motor-Menders Online Car Repair Center{" "}
        </h3>
      </div>
      <div className="left">
        <div className="color"></div>
        {/* ADD div */}
        <div className="ADD">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>{" "}
          {/* this div is for highlighting the text */}
          {
            //!span tag is used for the grouping of inline elements
          }
          <span>Best Mechanics in the Town</span>
        </div>
        {/* front heading */}
        <div className="font-text">
          <div className="rev1">
            <span className="stroke-text" id="rev1">
              REVITALIZE-
            </span>
            <span className="rev1">YOUR</span>
          </div>
          <div className="rev1">RIDE TODAY</div>
        </div>{" "}
        {/*font text div closure */}
        <div className="figure">
          <div>
            <span>
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
            </span>
            <span>Customers</span>
          </div>
          <div>
            <span>
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
            </span>
            <span>Employees</span>
          </div>
          <div>
            <span>
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
            </span>
            <span>Services Provided</span>
          </div>
        </div>{" "}
        {/*figure div tag closure */}
        {/* front buttons */}
        <div className="button">
          <Link to="/Appointment">
            <button id="btn">GET AN APPOINTMENT</button>
          </Link>
        </div>
      </div>{" "}
      {/* this is left div closure  */}
      {
        //! this is the right side of the front page side
      }
      <div className="right">
        <div className="right-triangle"></div>
        <div className="right-triangle1"></div>
        <div className="right-triangle2"></div>
      </div>
      <img src={background} alt="" className="pic" />
    </div>
  );
};

export default Front;
