import { useState,useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profile from "../DynamicComponents/Profile";
import ReactTable from "./ReactTable";

function Admindash() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Profile");
  const [notificationCount, setNotificationCount] = useState(0);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const showComponent = (componentName) => {
    setActiveComponent(componentName);
  };
  useEffect(() => {
    const handleNewAppointment = (event) => {
      // Handle the new appointment event here
      const appointmentData = event.detail;
      console.log("New Appointment Received:", appointmentData);
      // You can update your UI or take any other action here
    };

    // Add event listener when the component mounts
    window.addEventListener("newAppointment", handleNewAppointment);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("newAppointment", handleNewAppointment);
    };
  }, []);
  return (
    <div className="Dashboard-grid-container">
      <Header OpenSidebar={OpenSidebar}  setNotificationCount={setNotificationCount} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        showComponent={showComponent}
      />
      {activeComponent === "Profile" ? <Profile /> : null}
      {activeComponent === "Bills" ? <ReactTable /> : null}
      {activeComponent === "Customers" ? <ReactTable /> : null}
      {activeComponent === "Employees" ? <ReactTable /> : null}
      {activeComponent === "Services" ? <ReactTable /> : null}
    </div>
  );
}
export default Admindash;
