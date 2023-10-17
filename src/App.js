import "./App.css";
// import React from "react";
// import Front from "./Components/Front";
// import Servic from "./Components/Servic";
// import BelowServic from "./Components/BelowServic";
// import AboveFooter from "./Components/AboveFooter";
// import Footer from "./Components/Footer";
// import NavBar from "./Components/NavBar";

import Home from "./HomeComp/Home";
import {Route,Routes} from "react-router-dom"
import About from  "./AboutComp/About";
import Services from "./ServicesComp/Services";
import Appointment from "./AppoitmentComp/Appointment";
import Contact from "./ContactComp/Contact";
import Signup from "./SignupComp/Signup";
import ForgotPassword from "./SignupComp/Forgotpassword";
import Dashboard from "./AdminDashboard/Dashboard";
// import Admin from './Admin/Admin'
import Box from "./components/Box/Box";
import Logout from "./components/Logout/Logout";



function App() {
  
  return (
 

      <div className="App">
         <div> 
    {/* Routes is used for the pages linking  */}
    
  
         { 
            
           <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/About" element={<About/>}/>
          <Route  path="/Services" element={<Services/>}/>
          <Route  path="/Appointment" element={<Appointment/>}/> 
          <Route  path="/Contact" element={<Contact/>}/>
          <Route  path="/Signup" element={<Signup/>}/> 
          <Route path="/Forgotpassword" element={<ForgotPassword/>}/>
          
          <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/StaffDetails" element={<Box/>}/>  
            <Route path="/Logout" element={<Logout/>}/>  


             {/* <Admin/>  */}

          {/* <Dashboard/>  */}
          
           </Routes> 
           
         }


           {/* <Box/> */}
        
        {/* <Dashboard/> */}
          </div>
      
      



</div>
  );
}
export default App;