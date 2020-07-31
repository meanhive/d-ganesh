import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <Link to="/home" className="nav-link" id="home">
          Home <i className="fas fa-home"></i>
        </Link>
        <Link to={"/about"} className="nav-link" id="about">
          About <i className="fas fa-user"></i>
        </Link>
        <Link to={"/work"} className="nav-link" id="work">
          My Work <i className="fas fa-folder-open"></i>
        </Link>
        <Link to={"/contact"} className="nav-link" id="contact">
          How to Reach Me <i className="fas fa-coffee"></i>
        </Link>
      </div>
    );
  }
}

export default Nav;
