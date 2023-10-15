import React from "react";
import Res2 from "../images/Res2.JPG";
import "./AboveFooter.css";
import Companylogos from "./Companylogos";
import { Link } from "react-router-dom";

//!exported to the App.js component
const AboveFooter = () => {
  // function EmailLink() {
    const emailAddress = "motormenders23@gmail.com"; //  company's email address
  
    const handleEmailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };

  return (
    <div>
      <div className="reason">
        <div className="left-reasons">
          <img src={Res2} alt="" className="imagecar" />
        </div>

        <div className="right-reasons">
          <span className="heading1">Know More about Our company</span>
          <span className="heading">WHY CHOOSE US</span>

          <span className="simple-text">
            Our highly skilled technicians are fully qualified to work on all
            makes and models and attend to all vehicles with exceptional
            expertise, however we provide specialist care for LAND ROVER, BMW,
            MERCEDES BENZ, AUDI, JAGUAR, PORSCHE,CHRYSLER, GMC, BENTLEY.
            <br></br>
            <span>
            The quality of our work is paramount, so we only use genuine parts ,
            as well as top-branded lubricants and motor oil when servicing your
            vehicle.</span>
            <br></br>
            <span>
            We do our utmost to provide our customers with a first class,
            efficient and friendly service, from investigating and diagnosing
            faults through to providing sound advice on all technical and
            mechanical problems. At JW Motors we offer real value for money and
            a cost-effective alternative to the franchised main dealers.</span>
            <br></br>
            <ul>
              <li>Respect the price indicated in their quotes</li>
              <li>Provide you with a clearly laid-out invoice</li>
              <li>Look after your vehicle</li>
              <li>Respect agreed deadlines</li>
              <li>
                Inform you and advise you if they find anything wrong with your
                vehicle
              </li>
            </ul>
          </span>

          {/* closing of the right-reasons class */}
        </div>
        {/* closing of the reasons class div */}
      </div>

      <div>
  
         <Companylogos/> 
        {/* closing of the componanylogos imported componnet div */}
      </div>

      <div id="bg-text">
        <h1>Have a QUESTION or need assistance?​</h1>
        <p>
          Our dedicated customer support team is ready to help. You can reach by
          sending us email at.
          <Link to={`mailto:${emailAddress}`} onClick={handleEmailClick} id="mail">{emailAddress}
    </Link> 
        </p>
        <Link to ='/Contact'> 
        <button id="bttn">Contact US
       
        </button>
        </Link>
        
        {/* closing of the bg-text id */}
      </div>

      {/* closing of the main div */}
    </div>
  );
};

export default AboveFooter;
