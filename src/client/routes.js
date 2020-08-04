import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/homepage/Homepage';

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
);
export default Routes;
