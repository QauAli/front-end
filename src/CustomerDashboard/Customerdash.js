import React,{useState} from 'react'
import '../AdminDashboard/Dashboard.css'
import '../AdminDashboard/Sidebar.css'

import C_Sidebar from './C_Sidebar';
import Profile from '../DynamicComponents/Profile';
import {BsPersonCircle,BsJustify,BsSearch,BsFillBellFill,BsFillEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
function Customerdash() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    };
  return (
    <div className='Dashboard-grid-container'>
        
        <header className='dash-header'>
      <div className='dash-menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='dash-header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='dash-header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        
          <BsPersonCircle className='icon' />
      </div>
    </header>
        <C_Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Profile/>

    </div>
  )
}

export default Customerdash;