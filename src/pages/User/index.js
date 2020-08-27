import React from 'react';
import { Link } from 'react-router-dom';

import {

  Header,
  Wrapper,
  WrappInfo,
  Imagem,
  Title,
  SubmitButton,
  Main,
  Modal,
  Close,
  WrapperInput,
  Button,
  Form,
} from './styles';


import {
  FiLogOut,
  FiClock,
  FiBook,
  FiX,
  FiEdit,
  FiAlignJustify,
  FiAlertTriangle
} from 'react-icons/fi';


import Card from '../../components/Card';
import Input from '../../components/Input';

function User() {
  function handleSubmit(event) {
    event.preventDefault();

    alert('Adicionado');
  };


  return (
    <>
      <Header>

        <Wrapper left='true'>
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

            <SubmitButton href="#openModel" type='submit'> CRIAR</SubmitButton>

          </WrappInfo>

        </Wrapper>

        <Wrapper right='true'>

          <Link to='/login'>
            <FiLogOut />
          </Link>

        </Wrapper>

      </Header>

      <Main>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </Main>


      <Modal id="openModel" className="modal">
        <Close href="#exitModel" title="Fechar" className="exitModel"><FiX /></Close>

        <Form onSubmit={handleSubmit}>

          <WrapperInput>
            <FiEdit />
            <Input
              type={'text'}
              placeholder={'Título'}
            />
          </WrapperInput>

          <WrapperInput>
            <FiAlignJustify />
            <Input
              type={'text'}
              placeholder={'Descrição'}
            />
          </WrapperInput>

          <WrapperInput>
            <FiAlertTriangle />
            <Input
              type={'text'}
              placeholder={'Digite seu apelido'}
            />
          </WrapperInput>

          <Button type='submit'>
            ADICIONAR
            </Button>

        </Form>
      </Modal>
    </>
  );
};



export default User;
