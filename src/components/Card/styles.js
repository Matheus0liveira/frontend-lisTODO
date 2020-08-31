import styled from 'styled-components';

export const Wrapper = styled.article`

  padding: 2rem;
  width: 30%;
  max-width: 35rem;
  background: #DADAE7;
  margin: 2rem;
  transition: all .5s;
  overFlow: hidden;


  &:hover{
    margin-top: 1.5rem;
  }


  header{
    display: flex;
    justify-content: space-between;
  }

  main{

    p{
      padding-right: 10rem;
      color: #52527A;
    }

  }
   footer{
      display: flex;
      justify-content: flex-end;

      div{

        svg{
          font-size: 2rem;
          color: #DB504A;
          transition: opacity 0.4s;
          margin: 0 0.2rem;
          cursor: pointer;

          &:hover{
            opacity: 0.5;
          }

        }
        svg:last-of-type{
          color: #44CF6C;

        }
      }
    }

     @media (max-width: 700px){
     width: 100%;

     &:hover{
    margin-top: 2rem;
  }
    }

`;
export const Title = styled.h4`

  font-size: ${(props) => (props.date ? '1.5rem' : '')};
  color: #52527A;
`;
