import { useState } from 'react'
import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Columns from './Columns'
import ReactTable from './ReactTable'
import Admin from "../images/Admin.png"


function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='Dashboard-grid-container'>
        
        <Header OpenSidebar={OpenSidebar}/>
        
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        {/* <img className="Admin-img" src={Admin} alt=''/> */}
        <Home />
        <ReactTable/>
        {/* <Columns/> */}
        
      </div>
    )
  }
export default Dashboard

