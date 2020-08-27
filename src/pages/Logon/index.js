import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import { UserLogon, Form, Wrapper, Title, Line, Buttons, Button } from './styles'

import { FiEdit3, FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'


function Login() {
  const [inputName, setInputName] = useState('');
  const [inputNickName, setInputNickName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert('HAHA')
  };


  return (
    <UserLogon>
      <div>
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
              type={!showPassword ? 'password' : 'text'}
              value={inputPassword}
              placeholder={'Sua melhor senha'}
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
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
      </div>
    </UserLogon>
  );
}

export default Login;
