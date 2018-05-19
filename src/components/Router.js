import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Inventory from './Inventory';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/inventory" component={Inventory} />
    </Switch>
  </BrowserRouter>
)

export default Router;
