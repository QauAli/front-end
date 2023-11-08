import { useState } from 'react'
// import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Profile from '../DynamicComponents/Profile'
import ReactTable from './ReactTable'


function Admindash() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [activeComponent, setActiveComponent] = useState('Profile');

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    };
    const showComponent = (componentName) => {
      setActiveComponent(componentName);
    };
    
    return (
      <div className='Dashboard-grid-container'>
      
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} showComponent={showComponent} />
        {activeComponent === 'Profile' ? <Profile /> : null}
      {activeComponent === 'Bills' ? <ReactTable /> : null}
      {activeComponent === 'Customers' ? <ReactTable /> : null}
      {activeComponent === 'Employees' ? <ReactTable /> : null}
      {activeComponent === 'Services' ? <ReactTable /> : null}
</div>
    )
  }
export default Admindash

