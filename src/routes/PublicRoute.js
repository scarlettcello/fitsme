import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  isFoodSearched,
  component: Component,
  foods,
  foodsDiary,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          isFoodSearched ? (
            <Redirect to={`/add/${foods.id}`} />
          ) : (
            <Redirect to="/dashboard" />
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
    isFoodSearched: !!state.foods.calories,
    foods: state.foods,
    foodsDiary: state.foodsDiary,
  };
};

export default connect(mapStateToProps)(PublicRoute);
