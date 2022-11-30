import React from 'react';

import { Switch } from 'react-router-dom';
import Checkout from '../pages/checkout';

import Home from '../pages/home';
import Order from '../pages/order';
import Products from '../pages/products';

import Route from './route'

export const Routes = () => {
  return (
    <Switch>
        <Route exact path='/:id' component={ Home }/>
        <Route exact path='/:id/product' component={ Products }/>
        <Route exact path='/:id/checkout' component={ Checkout }/>
        <Route exact path='/:id/order' component={ Order }/>
    </Switch>
  );
}
