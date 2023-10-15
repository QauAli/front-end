import React from 'react'
import NavBar from '../DynamicComponents/NavBar'
import Hero from '../DynamicComponents/Hero'
import Servicesimg from '../images/Servicesimg.png'
//import Imageslider from './Imageslider'
import Servicecards from './Servicecards'
import Footer from '../DynamicComponents/Footer'
import icon1 from '../images/icon.png';
import Companylogos from "../HomeComp/Companylogos"


function Service() {
  return (
    <>
   <NavBar/>
      <Hero
  cName="hero-Services"  //   this cName is the class name for editing 
  heroImg={Servicesimg}
    />
    <h1 className='SS'><img src={icon1} alt="gif"  className='gif'/>OUR-SERVICES</h1>
    <div className='image-change'/>
  
{/* <Imageslider/> */}
<Servicecards/>

<Companylogos/>
<Footer/>

    </>
  )
}

export default Service;