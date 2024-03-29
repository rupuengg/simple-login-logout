/* eslint-disable no-unused-expressions */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateLogin = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/login",
        state: {
          from: props.location
        }
      }} />
  )} />
);