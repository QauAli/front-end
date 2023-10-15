import React from 'react'
import NavBar from '../DynamicComponents/NavBar'
import Hero from '../DynamicComponents/Hero'
import Aboutimg from '../images/aboutimg.jpg'
import Footer from '../DynamicComponents/Footer'
import Aboutleft from './Aboutleft.js'
import Aboutprocess from './Aboutprocess.js'
import  './Aboutstyles.css'
import Aboutright from './Aboutright.js'
function About() {

  return (
    <>
    <NavBar/>
{/* hero component import provides dynamic image and text setting */}
    <Hero
    cName="hero-about"
    heroImg={Aboutimg}
   title="About"
    />


     <div className='Aboutmain'> 
                                <Aboutleft/>
                               <Aboutright/>
                               

{/*===================== closing of the about main div tag ===================*/}
 </div>
<Aboutprocess/> 
<Footer/>

    </>
  )
}

export default About;