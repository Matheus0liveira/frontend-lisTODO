import React from 'react';

import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Logon from './pages/Logon';
import User from './pages/User';




function Routes() {
  const loggedIn = true;
  return (
    <BrowserRouter>
      <Route exact path='/' component={User} />
      <Route exact path='/login' component={Login} />
      <Route path='/logon' component={Logon} />

    </BrowserRouter>
  );
}

export default Routes;
