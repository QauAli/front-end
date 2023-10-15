import React, { useState, useEffect } from 'react'
//import './Companylogos.css'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'
import client6 from '../images/client6.png'
import client1 from '../images/client1.png'
import client8 from '../images/client8.png'
import client9 from '../images/client9.png'

//! this component is exported to the Reasons component
const Companylogos = () => {
  return (

    <div className='rotation'>
                      <div id='logos'>

  <img src={client2} alt="" id='pic1' />
 <img src={client3} alt="" id='pic1'  />
 <img src={client9}alt="" id='pic1'/> 
<img src={client4} alt="" id='pic1'  />
<img src={client5} alt="" id='pic1' />
<img src={client6} alt="" id='pic1' />
{/* <img src={client7} alt="" id='pic1'/> */}
<img src={client8}alt="" id='pic1'/>
 <img src={client1}alt="" id='pic1'/> 
                                         </div> 
     </div>
     )
}
    export default Companylogos;



    