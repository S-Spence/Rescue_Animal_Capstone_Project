import React from "react";
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
// import navlink
import { NavLink } from "react-router-dom";
import Logo from "../assets/Grazioso_Salvare_Logo.png";

// Display the navigation bar
export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img style={{ width: 15 + "%" }} src={Logo} alt="logo"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Search and Rescue Animals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/all">
                All Animals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Add Animal
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
