import React from 'react'
import './ImgSlider.css'
import appimg1 from '../images/appimg1.jpg'
import appimg2 from '../images/appimg2.jpg'
import appimg3 from '../images/appimg3.jpg'
import appimg4 from '../images/appimg4.png'
import appimg5 from '../images/appimg5.jpeg'
import appimg7 from '../images/appimg7.jpeg'
import bghome from '../images/bghome.jpg'
import appimg8 from '../images/appimg8.jpg'
import log from '../images/log.jpg'
function ImgSlider() {
  return (
    <div className='aptdiv'>
    <div className='slider'>
        <div className='slide-tracker'>
       {/*=============================== 7 slides of images============================= */}
     <div className='slide'>
        <img src={appimg1} alt=""/>
        <img src={appimg2} alt=""/>
        <img src={appimg3} alt=""/>
        <img src={appimg4} alt=""/> 
        <img src={bghome} alt=""/>
         <img src={appimg5} alt=""/>
        <img src={log} alt=""/>
        <img src={appimg7} alt=""/>
        <img src={appimg8} alt=""/>
       
        
        <img src={appimg1} alt=""/>
        <img src={appimg2} alt=""/>
        <img src={appimg3} alt=""/>
        <img src={appimg4} alt=""/> 
        <img src={bghome} alt=""/>
         <img src={appimg5} alt=""/>
        <img src={log} alt=""/>
        <img src={appimg7} alt=""/>
        <img src={appimg8} alt=""/>
       
        
        {/*================ closing of the slide div tag================== */}
        </div>
        
        
{/*==================== closing of the slide track div tag===================== */}
        </div>
{/*=======================closing of the slider div tag==================== */}
         </div>
 {/*============================ closing of the aptdiv tag================== */}
         </div>
  )
}

export default ImgSlider