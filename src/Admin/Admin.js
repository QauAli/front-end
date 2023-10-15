import React from 'react'
import logo from '../images/logo.png'
import './Admin.css'
function Admin() {
  return (
    <>
    <div className='dash-header'>
        <div className="logosec">
          <div className="name">MotorMenders</div>
          <img src={logo} alt="logo" className='admin_Logo'/>
        </div>
    </div>
{/* ------------end of heder class------------------ */}

    <div class="searchbar">
        <input type="text"placeholder="Search"/>
        </div>

        <div class="message">
            <div class="circle"></div>
            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                 class="icn"
                 alt=""/>
                  </div>
    </>
  )
}

export default Admin