import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <FontAwesomeIcon icon={faSignOutAlt} />{" "}
          <span className="hide-sm">logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink to="#!">Developers</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/">
          <FontAwesomeIcon icon={faCoffee} /> DevConnector
        </NavLink>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
