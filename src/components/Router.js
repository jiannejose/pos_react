import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Inventory from './Inventory/Inventory';
import AddItem from './AddItem';
import EditItem from './EditItem';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/inventory/item/add" component={AddItem} />
      <Route path="/inventory/item/edit/:itemKey" component={EditItem}/>
      <Route path="/inventory" component={Inventory} />
      
             
    </Switch>
  </BrowserRouter>
)

export default Router;
