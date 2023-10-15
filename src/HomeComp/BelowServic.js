import React from "react";
import StructureCar from "../images/structure.png";
import "./BelowServic.css";

const BelowServic = () => {
  return (
    <div className="BS">
      <span className="heading"><i class="fa-solid fa-gears"></i>  ALL TYPES AND BRANDS OF CARS WORKSHOP</span>
      <img src={StructureCar} alt="" className="img"></img>
    <p >WE ARE OFFERING DIFFERENT KIND OF SERVICES TO OUR CUSTOMER TO ENTERTAIN THEM WITH FULL OF PASSION ARE FOLLOWS, MAINTENANCE TASKS COMMONLY CARRIED 
      OUT DURING A MOTOR VEHICLE SERVICE INCLUDE:</p>
  <div id="list">
    {/*------ bottom is call from footer.css -------*/}
                       <div>
    <ul>
      <li>CHANGE THE ENGINE OIL</li>
      <li>REPLACE THE CABIN OR A/C FILTER</li>
      <li>CHECK LEVEL AND REFILL BRAKE FLUID / CLUTCH FLUID</li>
      <li>CHECK CONDITION OF THE TIRES</li>
      <li>CHECK THE BATTERY</li>
      <li>INSPECT AND REPLACE THE TIMING BELT OR TIMING CHAIN IF NEEDED</li>
    </ul>
                         </div>

            <div>
      <ul>
        <li>REPLACE THE AIR FILTER</li>
        <li>REPLACE THE SPARK PLUGS</li>
        <li>CHECK BRAKE PADS / LINERS, BRAKE DISCS / DRUMS, AND REPLACE IF WORN OUT</li>
        <li>CHECK LEVEL AND REFILL POWER STEERING FLUID</li>
        <li>CHECK FOR PROPER OPERATION OF ALL LIGHTS, WIPERS ETC</li>
        <li>GREASE AND LUBRICATE COMPONENTS</li>
      </ul>
              </div>
<div>
      <ul>
        <li>REPLACE THE FUEL FILTER</li>
        <li>CHECK COOLANT HOSES</li>
        <li>CHECK THE CHARGING SYSTEMS</li>
        <li>CHECK LEVEL AND REFILL AUTOMATIC / MANUAL TRANSMISSION FLUID</li>
        <li>CHECK FOR ANY ERROR CODES IN THE ECU AND TAKE CORRECTIVE ACTION</li>
        <li>USE A SCAN TOOL TO READ TROUBLE CODE</li>
      </ul>
</div>
<p>MECHANICAL PARTS THAT MAY CAUSE THE CAR TO CEASE TRANSMISSION OR 
  PROVE UNSAFE FOR THE ROAD ARE ALSO NOTED AND ADVISED UPON.</p>
    {/* -----------------------------closing of the bottom div tag----------------------------- */}
  </div>
</div>
   
    
  );
};

export default BelowServic;
