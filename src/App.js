import React from 'react';
import { GlobalStyle, Container } from './assets/styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
