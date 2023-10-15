import React from 'react'
import './Header.css'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='Header'>

<img src={logo}  alt="logo" className='Logo'/> 
{/* alt is used to set text if the image is not load we easily know about which img is not loaded 
now including nav-bar after the logo */}



  
    
    </div>
  )
}

export default Header