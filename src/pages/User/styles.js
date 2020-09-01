import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 auto;

  h1{
    font-size: 2rem;
    font-weight: lighter;
  }

  @media (max-width: 700px){
    justify-content: center;
    margin: 0 auto;
  }



`;
