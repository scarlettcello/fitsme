import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ isAuthenticated, startLogout }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>FitsMe!</h1>
          </Link>
          {isAuthenticated ? (
            <button className="button button--link" onClick={startLogout}>
              Logout
            </button>
          ) : (
            <Link to="login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
