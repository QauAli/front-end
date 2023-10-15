import React from 'react'
import './Aboutstyles.css'
import Aboutimg5 from '../images/Aboutimg5.jpg'
import Aboutimg2 from '../images/Aboutimg2.jpg'
import homeimg from '../images/homeimg.jpg'
const Aboutright = () => {
  return (
    <div>

<div className='rightA'>
  <img src={Aboutimg5} alt="" id='b'/>
  <img src={Aboutimg2} alt="" id='b'/> 
  <img src={homeimg} alt='' id='c'></img>

  {/*--------------------- closing of the rightA div tag ----------------*/}
</div>
    </div>
  )
}

export default Aboutright;