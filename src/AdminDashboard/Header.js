
import './Header.css'
import '../DynamicComponents/Profile'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import { useEffect} from 'react';
import arrays from '../variables/globals';



function Header({ OpenSidebar }) {

const fetchNotifications = async () => {
  try {
    const response = await fetch ('http://127.0.0.1:5000/unread_appointments');
    const data = await response.json();

    if (response.ok) {
      arrays.newAppointments=true;
      arrays.totalAppointments = data.new_appointments.new_appointments_count;
      console.log("appointments="+arrays.newAppointments + arrays.totalAppointments);

    } else {
      console.log("Failed to fetch notifications");
      arrays.newAppointments=false;
      arrays.totalAppointments = 0;
    }
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
};

const fetchUnreadMessages = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/unread_messages');
    const data = await response.json();

    if (response.ok) {
      arrays.newMessages = true;
      arrays.totalMessages = data.new_messages.new_messages_count;
      console.log("messages=" + arrays.newMessages + arrays.totalMessages);
    } else {
      console.log("Failed to fetch unread messages");
      arrays.newMessages = false;
      arrays.totalMessages = 0;
    }
  } catch (error) {
    console.error("Error fetching unread messages:", error);
  }
};



useEffect(() => {
  fetchNotifications();
  fetchUnreadMessages();
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
        
        <sup>{arrays.newAppointments > 0 && arrays.totalAppointments}</sup>
        <BsFillBellFill  className='bell'/></div>
        
        <div className='envelop'>
  <sup>{arrays.newMessages > 0 && arrays.totalMessages}</sup>
  <BsFillEnvelopeFill className='icon' />
</div>

        <div>
        <BsPersonCircle className='icon' />
        </div>
    
    </header>
  );
}

export default Header;
