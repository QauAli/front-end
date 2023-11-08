import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { BsGrid1X2Fill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsPersonCircle } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, showComponent }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <i class="fa-solid fa-car fa-beat"></i> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => showComponent('Profile')}>
          <BsPersonCircle className='icon' /> Profile
        </li>
        <li className='sidebar-list-item'>
        <Link to= '/Dashboard'>
        <BsPersonCircle className='icon' /> Dashboard 
          </Link>
        </li>
        
        <li className='sidebar-list-item' onClick={() => showComponent('Bills')}>
          <BsGrid1X2Fill className='icon' /> Bills
        </li>
        <li className='sidebar-list-item' onClick={() => showComponent('Services')}>
          <BsListCheck className='icon' /> Services
        </li>
        <li className='sidebar-list-item' onClick={() => showComponent('Customers')}>
          <BsPeopleFill className='icon' /> Customers
        </li>
        <li className='sidebar-list-item' onClick={() => showComponent('Employees')}>
          <BsPeopleFill className='icon' /> Employees
        </li>
        <li className='sidebar-list-item'>
          <Link to ='/Logout'>
            <i class="fa-solid fa-right-from-bracket"></i> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
