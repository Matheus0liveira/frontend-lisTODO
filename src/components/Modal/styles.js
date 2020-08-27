import styled from 'styled-components';



export const StyledModal = styled.div`
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
