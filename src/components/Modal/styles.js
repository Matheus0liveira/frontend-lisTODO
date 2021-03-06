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
  margin:  20rem auto;
  background:#FDFFF7 ;
  border: 0.2rem solid #52527A;
  z-index: 99999;
  opacity:0;
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

    transition: transform .8s cubic-bezier(1,-0.81, 0.15, 1.18) ;
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

  display: inline-block;
  text-align: center;
  width: 100%;
  background: #202030;
  border: 0;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 1.5rem 0;
  width: 100%;
  color: #DADAE7;
  transition: all .5s;
  cursor: pointer;

  &:hover{
  background:#52527A;

  }


`;
