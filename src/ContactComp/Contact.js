import React from 'react'
import NavBar from '../DynamicComponents/NavBar'
import Hero from '../DynamicComponents/Hero'
import Contactimg from '../images/Contactimg.JPG'
 import Contactform from './Contactform'
 import C1 from '../images/C1.png'
 import C2 from '../images/C2.png'
 import C3 from '../images/C3.png'
 import C4 from '../images/C4.png'
 import Footer from '../DynamicComponents/Footer'
 import './Contact.css'
function Contact() {
  return (
    <>
    <NavBar/>
  <Hero
    cName="hero-Contact"
    heroImg={Contactimg}
    title="CONTACT US"
    />

<div className='cntct'>
    <div className='Cleft'>
      <h2>Let's Get in Touch</h2>
    
      {/*================== closing of the Cleft div tag=========== */}
     <img src={C3} alt="" id='contact1'/> 
      <Contactform/>
    </div>

    <div className='Cright'>
      <h1>Contact Details</h1>
      <h3>Our Hours</h3>
      <p><i class="fa-solid fa-clock"></i>
11:00 AM – 10.00 PM</p>
<p><i class="fa-solid fa-calendar-week"></i>(Monday – Sunday)</p>
<h2> Contact Us</h2>
<p><i class="fa-solid fa-phone"></i>Phone: 051-5647112</p>
<p><i class="fa-solid fa-envelope"></i>Email: motormenders23@gmail.com</p>

<img src={C1} alt=""/>
<img src={C2} alt="" id='contact'/>

<img src={C4} alt="" id='contact2'/>
</div>
    </div>

    {/*========================= closing of the 1st div========================== */}

<Footer/>
    </>
  )
}

export default Contact