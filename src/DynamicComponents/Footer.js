import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id='footer'>
  <div  id='top'>
        <div>
      <h1>MOTOR MENDERS</h1>
        <span>Revive,Repair,Ride</span>
        </div>
       
        <div>
        <a href='https://www.facebook.com/100090560161066/posts/103563619338977/?mibextid=rS40aB7S9Ucbxw6v' target='_blank' rel='noopener noreferrer'>
  <i className='fa-brands fa-facebook-square'></i>
</a>
<a href='https://www.instagram.com/motor.menders/?igsh=YzljYTk1ODg3Zg%3D%3D' target='_blank' rel='noopener noreferrer'>
  <i className='fa-brands fa-instagram-square'></i>
</a>
<a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
  <i className='fa-brands fa-twitter-square'></i>
</a>
        </div>
        {/* closing of the top id div  */}
        </div>

        
<div id="bottom">
<div>
<h2>OUR SERVICES  </h2>
         <ul>
<li>Diagnostics Tools, Online Programming</li>
<li>Brakes, Maintenance,Inspection</li>
      <li>Engine Service, Electrical Diagnostics</li>
      <li>Oil & Filter Change, Transmission check</li>
        <li>Transmission check, Power Train</li>
    <li>Tyres and Wheels,Brake System</li>
    <li>Air Conditioning</li>
    </ul>
</div>

<div>
  <h2>SERVICE HOURS</h2>
<ul>
  <li>Monday-Thursday (11:00am - 10:00pm)</li>
  <li>Friday (OFF)</li>
  <li>Saturday-Sunday (11:00am - 10:00pm)</li>
</ul>

{/* ----------------------closing of the service hours div ------------------*/}
</div>
<div className='footerp'> 
  <h2>CONTACT</h2>
  <h3>Email Address</h3>
<p><i class="fa-solid fa-envelope"></i> motormenders23@gmail.com</p>
<h3>Phone no</h3>
<p><i class="fa-solid fa-phone-volume"></i> 0321-5835886</p>
</div>

{/* ---------------------closing of the bottom classname div---------------- */}
</div>

{/* add waves in the end of footer */}
<div class="container">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>

  {/* closing of the footer class div tag       */}
    </div>
  )
}

export default Footer