import React from "react";
import '../AdminDashboard/Sidebar.css'
import arrays from "../variables/globals";
import { Link,useNavigate } from "react-router-dom";
// this link is used for redirecting to the sepcific section of the same page when click on linked tag
import {
  BsListCheck,
  BsPersonCircle,
} from "react-icons/bs";

function C_Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();

  function clearData() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      arrays.user = [];
      navigate("/");
    }
  }
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
        <i class="fa-solid fa-car fa-beat"></i> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
            <BsPersonCircle className="icon" /> Profile
        </li>
        <li className="sidebar-list-item">
          <Link to="/Appointment">
          <i class="fa-solid fa-calendar-check fa-bounce"></i>Get Appointment
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Services">
            <BsListCheck className="icon" /> View Services
          </Link>
        </li>
        <li className="sidebar-list-item" onClick={clearData}>
          <i class="fa-solid fa-right-from-bracket"></i> Logout
        </li>
      </ul>
    </aside>
  );
}

export default C_Sidebar;
