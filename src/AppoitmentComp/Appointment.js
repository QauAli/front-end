import React from 'react'
import NavBar from '../DynamicComponents/NavBar'
import Hero from '../DynamicComponents/Hero'
import AppointmentImg from '../images/AppointmentImg.jpg'
import './AppoitmentStyles.css'
import FormAppoitment from './FormAppoitment'
import Footer from '../DynamicComponents/Footer'
import ImgSlider from './ImgSlider'
//import Dynamicform from './Dynamicform'

function Appointment() {
  return (
    <>
  <NavBar/>
  <Hero
    cName="hero-Appointment"
    heroImg={AppointmentImg}
    title="Appointment"
    />

  <div id='appoitment'>
    <div className='Appleft'><h3><i class="fa-regular fa-calendar-check"></i>
    GET YOUR APPOINTMENT</h3>
    <ImgSlider/>
    <FormAppoitment/>
    </div>
    
{/* =========closing of the appoitment div tag======================= */}
  </div>

  <Footer/>
    </>
  )
}

export default Appointment