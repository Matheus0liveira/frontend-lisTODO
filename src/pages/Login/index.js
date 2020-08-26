import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import { Form, Wrapper, Title, Line, Buttons, Button } from './styles'

import { FiUser, FiLock } from 'react-icons/fi'


function Login() {
  const [inputText, setInputText] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('haha')
  };


  return (
    <>
      <Title>Bem vindo <br /> de volta!</Title>
      <Line />

      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <FiUser />
          <Input
            setInputValue={setInputText}
            type={'text'}
            value={inputText}
            placeholder={'Digite seu apelido'}
          />
        </Wrapper>
        <Wrapper>
          <FiLock />
          <Input
            setInputValue={setInputPassword}
            type={'password'}
            value={inputPassword}
            placeholder={'Sua senha'}
          />
        </Wrapper>
        <Buttons >
          <Link to='logon' logon='true'>
            <Button >
              CADASTRAR
            </Button>
          </Link>



          <Button type='submit'>
            ENTRAR
            </Button>



        </Buttons>
      </Form >
    </>
  );
}

export default Login;
