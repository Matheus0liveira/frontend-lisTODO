import styled from 'styled-components';

export const StyledHeader = styled.header`

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
    margin-left:${(props) => props.left && '10rem'} ;
    margin-right:${(props) => props.right && '10rem'} ;


    @media (max-width: 700px){
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
   }

  span svg{

    color: #52527A;
    font-size: 2rem;
    transition: opacity .2s;
    cursor: pointer;

    polyline, line{

    transition: all 1s ease;
    }

    &:hover polyline, &:hover line{

      transform: skew(360deg);
    }

    @media (max-width: 700px){
    position: absolute;
    top: 2.3rem;
    right: 2rem;
    };

  };


`;


export const Image = styled.div`

  img{
    width: 15.5rem;
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
      z-index: 99;

    }


  }
`;

export const SubmitButton = styled.a`

  display: flex;
  justify-content:center;
  align-items:center;
  width: 50%;
  text-align: center;
  padding: 2rem 6rem;
  background: #52527A;
  border: 0;
  color: #FDFFF7;
  font-size: 2.5rem;
  transition: opacity .2s;

  margin-bottom: 2rem;
  margin-right: 1rem;
  cursor: pointer;


   &:hover{
    opacity: 0.9;

  }


  @media (max-width: 700px){
     display: flex;
     width: 15%;
     margin: 0 auto;
    }

`;



export const CheckBox = styled(SubmitButton)`


  background: #44CF6C;
  padding: 0 1.5rem;
  margin-right: 0;
  transition: all .5s ease-in-out;


  &:hover svg{
    color:#44CF6C;
    transform: rotateY(360deg);
  }
  &:hover {
    background:#52527A;
  }


  svg{
    font-size: 4rem;
    transition: all .8s ease-in-out;

  }

  @media (max-width: 700px){

    padding: 0 2rem;
  };


`;
