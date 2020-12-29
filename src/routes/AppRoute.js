import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "../components/Home";
import AddFood from "../components/AddFood";
import Dashboard from "../components/Dashboard";
import EditFood from "../components/EditFood";
import Header from "../components/Header";
import SearchFood from "../components/SearchFood";

const AppRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add/:id" component={AddFood} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edit/:id" component={EditFood} />
        <Route path="/search" component={SearchFood} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
