import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import { Form, Wrapper, Title, Line, Buttons, Button } from './styles'

import { FiEdit3, FiUser, FiMail, FiLock } from 'react-icons/fi'


function Login() {
  const [inputName, setInputName] = useState('');
  const [inputNickName, setInputNickName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('HAHA')
  };


  return (
    <>
      <Title>Cadastrar</Title>
      <Line />

      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <FiEdit3 />
          <Input
            setInputValue={setInputName}
            type={'text'}
            value={inputName}
            placeholder={'Nome Completo'}
          />
        </Wrapper>
        <Wrapper>
          <FiUser />
          <Input
            setInputValue={setInputNickName}
            type={'text'}
            value={inputNickName}
            placeholder={'Seu apelido'}
          />
        </Wrapper>
        <Wrapper>
          <FiMail />
          <Input
            setInputValue={setInputEmail}
            type={'email'}
            value={inputEmail}
            placeholder={'E-mail'}
          />
        </Wrapper>
        <Wrapper>
          <FiLock />
          <Input
            setInputValue={setInputPassword}
            type={'password'}
            value={inputPassword}
            placeholder={'Sua melhor senha'}
          />
        </Wrapper>

        <Buttons>
          <Link to='login'>
            <Button >
              LOGIN
            </Button>
          </Link>



          <Button type='submit'>
            CADASTRAR
            </Button>





        </Buttons>
      </Form >
    </>
  );
}

export default Login;
