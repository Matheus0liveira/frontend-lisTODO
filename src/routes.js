import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Logon from './pages/Logon';



function Routes() {
  return (
    <BrowserRouter>

      <Route exact path='/login' component={Login} />
      <Route path='/logon' component={Logon} />

    </BrowserRouter>
  );
}

export default Routes;
