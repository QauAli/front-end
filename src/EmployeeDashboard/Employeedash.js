import React,{useState} from 'react'
import '../AdminDashboard/Dashboard.css'
import '../AdminDashboard/Sidebar.css'

import E_Sidebar from './E_Sidebar';
import Profile from '../DynamicComponents/Profile';
import {BsPersonCircle,BsJustify,BsSearch,BsFillBellFill,BsFillEnvelopeFill} from 'react-icons/bs'
function Employeedash() {
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
        <E_Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Profile/>

    </div>
  )
}

export default Employeedash;