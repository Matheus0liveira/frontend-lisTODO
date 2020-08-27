import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import { UserLogin, Form, Wrapper, Title, Line, Buttons, Button } from './styles'

import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'


function Login() {
  const [inputText, setInputText] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert('Logado')
  };


  return (
    <UserLogin>
      <div>
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
              type={!showPassword ? 'password' : 'text'}
              value={inputPassword}
              placeholder={'Sua senha'}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
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
      </div>
    </UserLogin>
  );
}

export default Login;
