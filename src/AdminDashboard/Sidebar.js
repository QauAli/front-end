import React from "react";
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import arrays from "../variables/globals";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsPersonCircle,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar, showComponent }) {
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
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => showComponent("Profile")}
        >
          <BsPersonCircle className="icon" /> Profile
        </li>
        <li className="sidebar-list-item">
          <Link to="/Dashboard">
            <BsPersonCircle className="icon" /> Dashboard
          </Link>
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => showComponent("Bills")}
        >
          <BsGrid1X2Fill className="icon" /> Bills Record
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => showComponent("Services")}
        >
          <BsListCheck className="icon" /> Services Record 
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => showComponent("Customers")}
        >
          <BsPeopleFill className="icon" />Customers Record
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => showComponent("Employees")}
        >
          <BsPeopleFill className="icon" />Employees Record
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => showComponent("Appointments")}
        >
          <BsPeopleFill className="icon" />Appointments Record
        </li>


        <li className="sidebar-list-item" onClick={clearData}>
          <i class="fa-solid fa-right-from-bracket"></i> Logout
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
