import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import useUser from '../utils/useUser';



function RouteWrapper({ redirectTo, isPrivate, component: Component, ...rest }) {

  const { userValues } = useUser();

  const authenticated = userValues.token;


  if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};


RouteWrapper.defaultProps = {
  redirectTo: '/signin',
  isPrivate: false,
}


export default RouteWrapper;
