import React, { Component } from "react";
import "./Navbar.scss";

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
          <p>Company Logo</p>
        </div>
        <nav className="nav">
          <p
            className="fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          >
            scroll
          </p>
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <li>About</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Blog</li>
            <li><button>Get in touch</button></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
