import React, { Component } from "react";
import Logo from "../../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { GoComment } from "react-icons/go";
import "./navbar.scss";

class NavBar extends Component {
  state = {
    isExpanded: false,
  };

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <header className="header">
        <div className="logo">
          <p>
            <img src={Logo} alt="logo" />
          </p>
        </div>
        <nav className="nav">
          <p
            className="fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          >
            <IoMdMenu />
          </p>
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <li className="active">About</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Blog</li>
            <li className={`${isExpanded ? "message" : ""}`}>
              <button><GoComment /> &nbsp;&nbsp;Get in touch</button>
            </li>
          </ul>
          <p
            className="fa-contact"
            aria-hidden="true"
          >
            <GoComment />
          </p>
        </nav>
      </header>
    );
  }
}

export default NavBar;
