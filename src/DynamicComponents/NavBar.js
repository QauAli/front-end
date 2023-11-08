import React, { Component } from 'react'
import  './NavBar.css'
//! ./ dot slash means component or file is in the same folder
import { Menuitems } from './Menuitems'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
//import Signup from '../routes/Signup'
class NavBar extends Component{

  // this handles the state when click to the navbar items
  state={
     clicked: false};


  handleClick=()=>
  {
    this.setState({clicked: !this.state.clicked})
  }
  

  render(){

  return (
    <nav className='NavBaritems'>
  <img src={logo}  alt="logo" className='navbar_Logo'/> 

  <div className='menu-icons' onClick={this.handleClick}>
  {// state is initialized when bars are clciked cross appears and when cross click bars are appear 
  }
  <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
</div>

{// make the navbar dynmic so reposnde according to the screen of user 
}
<ul className={this.state.clicked?"nav-menu active" : "nav-menu"}>

{// this div nav-menu makes the navigation bar responsive 
}

{Menuitems.map((item,index)=>{
  return(
    // dynamically assign the navbar items names by using the navabaritems component
    <li key={index} >
      <Link to={item.url} className={item.cName} >
    <i className={item.icons} ></i>{item.title}
   </Link> 
   </li>
  );
}) }
 <Link to="/Signup">
   <button id='btn1' >Sign-up</button> 
   </Link> 

   <Link to="/Admindash">
    <button id= 'btn1'> Admin_Dashboard</button>
   </Link>
   <Link to="/Customerdash">
    <button id= 'btn1'>Customer_Dashboard</button>
   </Link>
   <Link to="/Employeedash">
    <button id= 'btn1'>Employee_Dashboard</button>
   </Link>


  </ul>
    </nav>
    
    
  );
}
}

export default NavBar;