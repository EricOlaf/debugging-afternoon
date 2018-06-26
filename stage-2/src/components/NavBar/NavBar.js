import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../images/dev-mountain-logo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/">
              <img className="logo-image" src={Logo} alt="" />
            </Link>
          </div>

          <div className="navbar-links-container">
            <ul className="navbar-links">
              <Link to="/storefront">Store</Link>
              <Link to="/shoppingcart">Shopping Cart</Link>
              <Link to="/">Home</Link>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;
