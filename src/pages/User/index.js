import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Wrapper, WrappInfo, Imagem, Title, SubmitButton, Main } from './styles';
import { FiLogOut, FiClock, FiBook, FiChevronsUp, FiChevronsDown } from 'react-icons/fi';


import Card from '../../components/Card';

function User() {
  function handleSubmit(event) {
    event.preventDefault();

    alert('Adicionado');
  };

  return (
    <>
      <Header>

        <Wrapper>
          <Imagem>
            <img src="https://avatars2.githubusercontent.com/u/58826355?s=460&u=8c805f2a4e708a2f3ff9c6095373bcb622f1dda2&v=4" alt="" />
          </Imagem>
          <WrappInfo>
            <Title>Matheus Oliveira</Title>
            <div>

              <div>
                <FiClock />
                <span>3</span>
              </div>

              <div>
                <FiBook />
                <span>5</span>
              </div>

            </div>

            <form onSubmit={handleSubmit}>
              <SubmitButton type='submit'> ADICIONAR</SubmitButton>
            </form>
          </WrappInfo>

        </Wrapper>

        <Wrapper>
          <Link to='/login'>
            <FiLogOut />
          </Link>
        </Wrapper>
      </Header>
      <Main>
        <Card />
        <Card />
        <Card />
      </Main>
    </>
  );
};



export default User;
