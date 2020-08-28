import React, { useState, useEffect } from 'react';

import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import useUser from './utils/useUser';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';




function Routes() {
  const { userValues } = useUser();

  console.log(userValues);


  const loggedIn = userValues.token;

  return (
    <BrowserRouter>

      <Route exact path='/user'  >
        {
          loggedIn
            ?
            <Redirect to='/user' />
            :
            <Redirect to='/signin' />
        }
      </Route>
      <Route exact path='/'  >
        {
          loggedIn
            ?
            <Redirect to='/user' />
            :
            <Redirect to='/signin' />
        }
      </Route>


      <Route exact path='/user' component={User} />
      <Route exact path='/signin' component={SignIn} />
      <Route path='/signUp' component={SignUp} />

    </BrowserRouter>
  );
}

export default Routes;
