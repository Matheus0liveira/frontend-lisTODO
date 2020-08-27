import styled from 'styled-components';


export const Header = styled.header`

  display: flex;
  background: #DADAE7;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 0;

  @media (max-width: 700px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;
export const Wrapper = styled.div`

    display: flex;
    margin-left:${props => props.left ? '10rem' : ''}; ;
    margin-right:${props => props.right ? '10rem' : ''}; ;

  a svg{

    color: #52527A;
    font-size: 2rem;
    transition: opacity .2s;
    cursor: pointer;


    &:hover{
      opacity: 0.6;

    }
    @media (max-width: 700px){
    position: absolute;
    top: 2.3rem;
    right: 2rem;
  }

  }

  @media (max-width: 700px){
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
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
  margin-top: -1.5rem;

`;
export const WrappInfo = styled.div`
  margin:  1rem;

  div{
    display: flex;
    margin-bottom: 2rem;

    @media (max-width: 700px){
      justify-content: center;
    }
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

    footer a {
      width: 100%;
      height: 100%;
      z-index: 9999;

    }


  }
`;
export const SubmitButton = styled.a`

  display: flex;
  justify-content:center;
  width: 60%;
  text-align: center;
  padding: 2rem 6rem;
  background: #52527A;
  border: 0;
  color: #FDFFF7;
  font-size: 2.5rem;
  margin: 2rem 0;
  transition: opacity .2s;
  cursor: pointer;


   &:hover{
    opacity: 0.9;

  }
  @media (max-width: 700px){
     display: flex;
     width: 50%;
     margin: 0 auto;
     justify-self: center;
    }

`;


export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

   @media (max-width: 930px){
    }


`;
export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 30rem;
  max-width: 50rem;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin:  10rem auto;
  font-family: Arial, Helvetica, sans-serif;
  background:#FDFFF7 ;
  border: 0.2rem solid #52527A;
  z-index: 99999;
  opacity:0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;


  &:target {
  opacity: 1;
  pointer-events: auto;
  }
  & > div {
  width: 400px;
  position: relative;
  margin: 1rem auto;
  padding: 15px 20px;

  }


`;

export const Form = styled.form`

  width: 50%;
  min-width: 25rem;
  max-width: 50rem;
  margin:auto;


`;



export const Close = styled.a`

  position: absolute;
  width: 3rem;
  right: 1rem;
  top: -0.5rem;
  text-align: center;
  line-height: 3rem;
  margin-top: 0.5rem;
  color:#DB504A;
  font-size: 4rem;

  svg{

    transition: transform .5s cubic-bezier(0.75,-0.87, 0, 1.21);
  }

  svg:hover{
    transform: rotate(180deg);
  }
`;
export const WrapperInput = styled.div`

  display: flex;

  align-items: center;

  margin: 2rem auto;
  padding: 0.2rem 1rem ;
  background: #DADAE7;

  svg{
    width: 2rem;
    color: #52527A;
  }

`;
export const Button = styled.button`

  width: 100%;
  padding: 1.4rem 0.5rem;
  font-size: 1.4rem;
  background: #202030 ;
  border: 0;
  color: #DADAE7;
  font-weight: bold;
  transition: all .4s;
  cursor: pointer;

  &:hover{
    background: #DADAE7;
    color:#202030;
  }
`;


