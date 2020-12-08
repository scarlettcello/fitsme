import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import SearchFood from '../components/SearchFood';
import AddFood from '../components/AddFood';

const AppRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SearchFood} />
        <Route path="/AddFood/:id" component={AddFood}/>
      </Switch>
    </Router>
  );
}

export default AppRoute;