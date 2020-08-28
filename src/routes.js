import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';




function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={User} />
      <Route exact path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />

    </BrowserRouter>
  );
}

export default Routes;
