import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import Input from '../../components/Input';
import useUser from '../../utils/useUser';


import {
  UserSignIn,
  Form,
  Wrapper,
  Title,
  Line,
  Buttons,
  Button,
  MessageError
} from './styles';

import {
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff
} from 'react-icons/fi';


function SignIn() {
  const [signInValues, setSignInValues] = useState(
    {
      text: '',
      password: ''
    }
  );

  const [showPassword, setShowPassword] = useState(false);
  const [erroSignIn, setErroSignIn] = useState(false);

  const { userValues, setUserValues } = useUser();
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const { text, password } = signInValues;

    try {

      const user = await api.post('/users/signin',
        {
          nick_name: text,
          password
        }
      );
      setUserValues(user.data);

      if (user.data.token) {

        return history.push('/user');
      }

    } catch (e) {
      if (!erroSignIn) setErroSignIn(!erroSignIn);

    };

  };



  return (
    <UserSignIn>
      <div>
        <Title>Bem vindo <br /> de volta!</Title>
        <Line />

        <Form onSubmit={handleSubmit} >


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
          {erroSignIn && <MessageError>Apelido ou senha inválido</MessageError>}


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
