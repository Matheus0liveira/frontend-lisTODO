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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
    font-size: 4rem;
    background: #FDFFF7;
  }

  a{
    text-decoration: none;
  }

`

export const Container = styled.div`

  width: 100%;
  max-width: 1200px;
  padding: 0 2%;
  margin: 0 auto;
`
