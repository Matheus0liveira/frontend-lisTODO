import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { UserSignIn, Form, Wrapper, Title, Line, Buttons, Button } from './styles'

import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'


function SignIn() {
  const [signInValues, setSignInValues] = useState(
    {
      text: '',
      password: ''
    }
  );

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert('Logado')
  };
  function onKeyPress(event) {
    if (event.key === 'Enter') {
      return handleSubmit;
    }
  };



  return (
    <UserSignIn>
      <div>
        <Title>Bem vindo <br /> de volta!</Title>
        <Line />

        <Form onSubmit={handleSubmit} onKeyPress={onKeyPress}>


          <Wrapper>
            <FiUser />

            <Input
              type={'text'}
              placeholder={'Digite seu apelido'}
              value={signInValues.text}
              setInputValue={(value) => setSignInValues({ ...signInValues, text: value })}
            />
          </Wrapper>


          <Wrapper>
            <FiLock />

            <Input
              type={!showPassword ? 'password' : 'text'}
              placeholder={'Sua senha'}
              value={signInValues.password}
              setInputValue={(value) => setSignInValues({ ...signInValues, password: value })}

            />


            <span onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </Wrapper>


          <Buttons >
            <Link to='signup' logon='true'>
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
    </UserSignIn>
  );
}

export default SignIn;
