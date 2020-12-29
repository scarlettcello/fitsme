import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import SearchFood from "./SearchFood";

export const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>FitsMe!</h1>
          </Link>
          <button className="button button--link" onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
      <div>
        <SearchFood />
      </div>
    </header>
  );
};

// const mapStateToProps = (state) => ({
//   foods: state.food,
// });

// export default connect(mapStateToProps)(Header);

export default Header;

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout()),
// });

// export default connect(undefined, mapDispatchToProps)(Header);
