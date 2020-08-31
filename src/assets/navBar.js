import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-head">
            <Link to="/">
              <img src={Logo} alt="Name logo" />
            </Link>
            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
            </button>
          </div>
          <ul className={this.state.isOpen ? "navLink showNav" : "navLink"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
