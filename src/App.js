import React from 'react';

import { GlobalStyle } from './assets/styles/global';

import Routes from './routes';
import UserProvider from './context/user';

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>

        <Routes />
      </UserProvider>

    </>
  );
}

export default App;
