import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *:root{
    font-size: 60%;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  body,html{
    width: 100%;
    height: 100vh;
    font-size: 4rem;
    background: #FDFFF7;
  }

  a{
    text-decoration: none;
  }
  h4{
    font-size: 3rem;
  }
  p, label{
    font-size: 2rem;
  }


`;

export const Container = styled.div`

  width: 100%;
  max-width: 1200px;
  padding: 0 2%;
  margin: 0 auto;
`;
