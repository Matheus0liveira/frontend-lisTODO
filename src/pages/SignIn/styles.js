import styled from 'styled-components';


export const UserSignIn = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size: 4rem;
    background: #FDFFF7;

`;
export const Form = styled.form`
  width: 25vw;

  min-width: 24rem;


`;


export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  line-height: 0.9;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: #52527A;
`;


export const Wrapper = styled.div`

  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding: 0.2rem 1rem ;
  background: #DADAE7;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg{
    width: 2rem;
    color: #52527A;
  }
`;
export const Line = styled.hr`
  margin: 4rem 0;
  background: #DADAE7;
  height: 0.03rem;
  border: 0;
`;
export const Buttons = styled.div`

  display: flex;
  justify-content: space-between;


  a{
    display: flex;
    align-items: center;
    width: 45%;
  }



`;


export const Button = styled.button`
  width: 100%;
  padding: ${props => props.type === 'submit' ? '1.4rem 0.5rem' : '1.2rem 0.5rem'} ;
  font-size: 1.4rem;
  margin-left: ${props => props.type === 'submit' ? ' 2rem' : 'none'} ;
  background: ${props => props.type === 'submit' ? '#202030' : 'none'} ;
  border: ${props => props.type === 'submit' ? '0' : '0.2rem solid #202030'};
  color: ${props => props.type === 'submit' ? '#DADAE7' : '#52527A '};
  font-weight: ${props => props.type === 'submit' ? 'bold' : 'lighter '};
  transition: all .2s;
  cursor: pointer;

  &:hover{
    background: ${props => props.type === 'submit' ? '#52527A' : '#52527A'};
    color: ${props => props.type === 'submit' ? '#DADAE7' : '#DADAE7 '};
    border: ${props => props.type === 'submit' ? '0' : '0.2rem solid #52527A'};

  }
`;

export const MessageError = styled.p`
  color: #DB504A;
  font-size: 1.4rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
`;
