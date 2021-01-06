import React from "react";
import { Router, Switch } from "react-router-dom";
import history from "../history";
import Home from "../components/Home";
import AddFood from "../components/AddFood";
import Calendar from "../components/Calendar";
import Dashboard from "../components/Dashboard";
import EditFood from "../components/EditFood";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import "../styles/styles.scss";

const AppRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PrivateRoute path="/add/:id" component={AddFood} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/calendar" component={Calendar} />
        <PrivateRoute path="/edit/:id" component={EditFood} />
        <PublicRoute path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
