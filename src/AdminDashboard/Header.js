
import './Header.css'
import '../DynamicComponents/Profile'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import { useEffect, useState } from 'react';



function Header({ OpenSidebar }) {
  const [notificationCount, setNotificationCount] = useState(0);

  
  const handleBellClick = async () => {
    try {
        const markNotificationsReadResponse = await fetch('http://127.0.0.1:5000/mark_read', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        });

        if (markNotificationsReadResponse.ok) {
            const data = await markNotificationsReadResponse.json();
            setNotificationCount(data.new_appointments_count);
        } else {
            console.log("Failed to mark notifications as read");
        }
    } catch (error) {
        console.error("Error marking notifications as read:", error);
    }
};



useEffect(() => {
  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/unread_appointments');
      const data = await response.json();

      if (response.ok) {
        setNotificationCount(data.new_appointments_count);
      } else {
        console.log("Failed to fetch notifications");
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };
  fetchNotifications();
  const intervalId = setInterval(fetchNotifications, 60000); 

  return () => clearInterval(intervalId);
}, []);



  return (
    <header className='dash-header'>
      <div className='dash-menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='dash-header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='dash-header-right'>
        
        <sup>{notificationCount > 0 && notificationCount}</sup>
        <BsFillBellFill  className='bell' onClick={handleBellClick} /></div>
        
        <div>
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
        </div>
    
    </header>
  );
}

export default Header;
