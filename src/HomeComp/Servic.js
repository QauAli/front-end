import React from 'react'
import './servic.css'
import CardFront from './CardFront'
//!  this component is exported to the App.js
const Servic = () => {
  return (

    <div className='first'>
        <div className='second'>
        <span className='stroke-text'>What </span>
        <span id='small' >We </span>
        <span className='stroke-text'>Do?</span>
        {/* closing of the  clasName second div tag */}
        </div>
        <span className='second1'>----------------------</span>
<span className='small'>We prioritize delivering high-quality repairs and services to our customers. We use top-of-the-line equipment and genuine parts to ensure the longevity and reliability of your vehicle.</span>
     
     

     <div className="carpix">

      {//! cardfront component is used to set 4 images and its text 
      }
      
      {CardFront.map((Servic)=>
      <div className='pix'>
        {Servic.image}
        <span className='text1' >
        {Servic.heading}
        </span>
        <span className='text2'>
        {Servic.details}
        </span>
        {/* closing of the pix div tag */}
        </div>
      )}
      {/* closing of the carpix div tag */}
     </div>

{/* closing of the first div tag */}
    </div>

    
 
    
  )
}

export default Servic;