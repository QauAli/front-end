import React from 'react'
import NavBar from '../DynamicComponents/NavBar';
import Hero from '../DynamicComponents/Hero';
import reshomeimg from '../images/reshomeimg.jpg';
import Front from './Front';
import Servic from './Servic';
import BelowServic from './BelowServic';
import AboveFooter from './AboveFooter';
import Footer from '../DynamicComponents/Footer'
//import Box from '../Components/Box';
//it takes some stylings from herostyles.css
function Home() {
  return (
  
// fragements are used when we want to return multiple components inside it we can also use div tag
    <>
      <NavBar/>
      <Hero
    
      cName="hero"  //   this cName is the class name for editing 
      heroImg={reshomeimg}
      title="YOUR CAR MAINTANANCE !"
      text="WE MAKING DIFFERENCE TO GREAT THINGS POSSIBLE"
      buttontext="GET APPOINTMENT"
      url="/Appointment"
      btnClass="show"/>

<Front/>
<Servic/>
<BelowServic/>
<AboveFooter/>
<Footer/>
{/* <Box/> */}
      
    </>
  )
}

export default Home;