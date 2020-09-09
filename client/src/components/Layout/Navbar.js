import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/">
          <FontAwesomeIcon icon={faCoffee} /> DevConnector
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Developers</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
