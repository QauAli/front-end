import "./App.css";
import Home from "./HomeComp/Home";
import { Route, Routes } from "react-router-dom";
import About from "./AboutComp/About";
import Services from "./ServicesComp/Services";
import Appointment from "./AppoitmentComp/Appointment";
import Contact from "./ContactComp/Contact";
import Signup from "./SignupComp/Signup";
import ForgotPassword from "./SignupComp/Forgotpassword";
import Dashboard from "./AdminDashboard/Dashboard";
// import Admin from './Admin/Admin'
 import Box from "./components/Box/Box";
import Logout from "./components/Logout/Logout";
import Profile from "./DynamicComponents/Profile";
import Customerdash from "./CustomerDashboard/Customerdash";
import Admindash from "./AdminDashboard/Admindash";
import Employeedash from "./EmployeeDashboard/Employeedash";

function App() {
  return (
    <div className="App">
      <div>
        {/* Routes is used for the pages linking  */}

        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Forgotpassword" element={<ForgotPassword />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Admindash" element={<Admindash />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Customerdash" element={<Customerdash />} />
            <Route path="/Employeedash" element={<Employeedash />} />
          </Routes>
        }
      </div>
    </div>
  );
}
export default App;
