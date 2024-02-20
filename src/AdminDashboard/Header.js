
import './Header.css'
import '../DynamicComponents/Profile'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function Header({ OpenSidebar }) {
  const [notificationCount, setNotificationCount] = useState(0);

  
  const handleBellClick = async () => {
    const markNotificationsReadResponse = await fetch('http://127.0.0.1:5000/mark-read', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      
    });

    if (markNotificationsReadResponse.ok) {
      setNotificationCount(0); // Reset the notification count
    }
  };


  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/unread_appointments');
        const data = await response.json();

        if (response.ok) {
          setNotificationCount(data.new_appointment_count);
        } else {
          console.log("Failed to fetch notifications");
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    

    // Fetch notifications initially and set up polling
    fetchNotifications();
    const intervalId = setInterval(fetchNotifications, 60000); // Poll every 1 minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
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
        <BsFillBellFill className='icon' onClick={handleBellClick}  />
        {notificationCount > 0 && <span className='notification-badge'>{notificationCount}</span>}
        <BsFillEnvelopeFill className='icon' />
        
          <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
