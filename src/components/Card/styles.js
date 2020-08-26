import styled from 'styled-components';



export const Wrapper = styled.article`

  padding: 2rem ;
  width: 30%;
  background: #DADAE7;
  margin: 2rem;




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
    }

`;
export const Title = styled.h4`

  font-size: ${props => props.date ? '1.5rem' : ''};
  color: #52527A;
`;
