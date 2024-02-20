import React, { Component } from "react";
import "./NavBar.css";
import { Menuitems } from "./Menuitems";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    clicked: false,
    activeItem: '/', // Default active item is Home
  };
  
  

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // handleItemClick = (url) => {
  //   console.log('Clicked URL:', url);
  //   this.setState({ activeItem: url, clicked: false }, () => {
  //     console.log('Updated URL:', this.state.activeItem);
  //   });
  
  //   console.log('State after update:', this.state);
  // };

  render() {

    return (
      <nav className="NavBaritems">
        <img src={logo} alt="logo" className="navbar_Logo" />

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((item, index) => (
            <li key={index}>
                      <Link
  to={item.url}
  className={item.cName}>
  <i className={item.icons}></i>
  {item.title}
</Link>


            </li>
          ))}
          <Link to="/Signup">
            <button id="btn1">Sign-up</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
