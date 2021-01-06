import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  foodsDiary,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
    foodsDiary: state.foodsDiary,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
