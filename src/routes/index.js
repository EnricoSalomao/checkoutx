import React from 'react';

import { Switch } from 'react-router-dom';
import Checkout from '../pages/checkout';

import Home from '../pages/home';
import Products from '../pages/products';

import Route from './route'

export const Routes = () => {
  return (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/product' component={ Products }/>
        <Route exact path='/checkout' component={ Checkout }/>
    </Switch>
  );
}
