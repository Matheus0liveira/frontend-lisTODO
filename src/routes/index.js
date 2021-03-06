import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';


import SigIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import User from '../pages/User';

import Route from './Route';

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SigIn}> <Redirect to='/signin' /></Route>
        <Route exact path='/signin' component={SigIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/user' component={User} isPrivate />


      </Switch>
    </BrowserRouter>

  );
};

export default Routes;
