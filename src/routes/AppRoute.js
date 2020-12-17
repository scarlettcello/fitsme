import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import SearchFood from "../components/SearchFood";
import AddFood from "../components/AddFood";
import Dashboard from "../components/Dashboard";
import EditFood from "../components/EditFood";

const AppRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SearchFood} />
        <Route path="/add/:id" component={AddFood} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edit/:id" component={EditFood} />
      </Switch>
    </Router>
  );
};

export default AppRoute;