import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

const RouterWrapper = ({
  component: Component,
  ...rest
}) => {

  return (
    <Route
        {...rest}
        render={ props => (
          <Component {...props}/>
        )}
      />
  );
}

export default RouterWrapper;