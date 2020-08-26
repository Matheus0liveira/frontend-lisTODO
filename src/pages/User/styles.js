import styled from 'styled-components';


export const Header = styled.header`
  position:absolute;
  top: 0;
  left: 0;
  display: flex;
  background: #DADAE7;
  width: 100vw;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 0;



`;
export const Wrapper = styled.div`

  display: flex;
  margin: 0 10rem;

  a svg{

    color: #52527A;
    font-size: 2rem;
    transition: opacity .2s;
    cursor: pointer;


    &:hover{
      opacity: 0.6;

    }

  }


`;


export const Imagem = styled.div`

  img{
    width: 15rem;
  }

`;


export const Title = styled.h1`

  font-size: 4rem;
  color: #52527A;

`;
export const WrappInfo = styled.div`
  margin: 0 1rem;

  div{
    display: flex;
  }
  div div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;

    svg, span{
      font-size: 2rem;
      margin: 0 0.1rem;
      color: #52527A;
    }
  }
`;
export const SubmitButton = styled.button`

  width: 100%;
  padding: 2rem 6rem;
  background: #52527A;
  border: 0;
  color: #FDFFF7;
  font-size: 2.5rem;
  margin: 1rem 0;
  transition: opacity .2s;
  cursor: pointer;


   &:hover{
    opacity: 0.9;

  }

`;


export const Main = styled.main`



`;
