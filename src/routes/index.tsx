// Dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Card from '../pages/Card';

const Routes: React.FC = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/card">
          <Card />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
