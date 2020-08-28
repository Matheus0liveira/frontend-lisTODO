import React from 'react';

import { Route, BrowserRouter, Redirect } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './pages/User';




function Routes() {
  const loggedIn = true;
  return (
    <BrowserRouter>

      <Route exact path='/user'  >
        {
          !loggedIn
            ?
            <Redirect to='/Signin' />
            :
            <Redirect to='/user' />
        }
      </Route>


      <Route exact path='/user' component={User} />
      <Route exact path='/Signin' component={SignIn} />
      <Route path='/signUp' component={SignUp} />

    </BrowserRouter>
  );
}

export default Routes;
