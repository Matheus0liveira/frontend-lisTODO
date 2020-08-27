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


export const Image = styled.div`

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
  width: 6
  0%;
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


