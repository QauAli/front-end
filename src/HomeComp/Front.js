import React from 'react'
import './Front.css'
// import Header from './Header'
//import NavBar from './NavBar'
//import picf from '../images/picf.png'
import Numbercounter from 'number-counter' //this is package install
import background from '../images/background.png'
//import strips from '../images/strips.png'
import {motion} from 'framer-motion' //this library is used for adding motion in 
const Front = () => {
  const transition = {type: 'spring', duration: 3} //this handles the transition in the best mechanics div
  return (

    <div className='front'>
      <div className='small-text'>
<h3 className='fh'>Welcome to Motor-Menders 
  Online Car Repair Center </h3>
       </div>
        <div className='left'>
          <div className='color'>
        {/* <Header/> 
        <NavBar/>
        */}

        </div>



   {/* ADD div */}
        <div className='ADD'>
          <motion.div
          initial={{left:'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition, type: 'tween'}}></motion.div> {/* this div is for highlighting the text */}
      
   {//!span tag is used for the grouping of inline elements
    }  
      <span>Best Mechanics in the Town</span></div>
        




{/* front heading */}

<div className='font-text'>
      <div className='rev1'>
      <span className='stroke-text' id='rev1'>REVITALIZE-</span> 
    <span className='rev1'>YOUR</span>
      </div>
<div className='rev1'>RIDE TODAY
  </div>

      
    {/* <div className='small-text'>
<span>Welcome to Motor-Menders 
  Online Car Repair Center </span>
       </div> */}

    </div> {/*font text div closure */}


<div className="figure">
  <div>
    <span>
      <Numbercounter end={200} start={100} delay='4' preFix="+" />
     </span>
  <span>Customers</span></div>
  <div>
    <span> 
       <Numbercounter end={70} start={30} delay='4' preFix="+" /></span>
  <span>Employees</span>
  </div>
  <div>
    <span>
       <Numbercounter end={150} start={70} delay='4' preFix="+" />
    </span>
    <span>Parts Sold</span>
    </div>
</div> {/*figure div tag closure */}
  

    {/* front buttons */}
    <div className="button">
      <button id="btn">GET AN APPOINTMENT</button>
    </div>
    </div> {/* this is left div closure  */}






        {//! this is the right side of the front page side 
        }
        <div className='right'> 
      
        <div className='right-triangle'></div>
        <div className='right-triangle1'></div>
        <div className='right-triangle2'></div>
        {/* < img src={background} alt="" className='pic'/> */}
        {/* <span>Service Hours:Monday-Sunday(11AM-10PM)</span> */}
       
        
        </div>
        <img src={background} alt="" className='pic'/>
        {/* <img src={strips} alt='' className="bg-strips"></img> */}
           </div> 
         )
    
 
}

export default Front