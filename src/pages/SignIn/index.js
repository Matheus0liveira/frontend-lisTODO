import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff,
} from 'react-icons/fi';
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
  MessageError,
} from './styles';

function SignIn() {
  const [signInValues, setSignInValues] = useState(
    {
      nick_name: '', password: '',
    },
  );
  const [showPassword, setShowPassword] = useState(false);
  const [erroSignIn, setErroSignIn] = useState(false);
  const { setUserValues } = useUser();

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { nick_name, password } = signInValues;

      const { data } = await api.post('/users/signin',
        {
          nick_name,
          password,
        });
      setUserValues(data);

      const { token } = data;

      if (token) {
        return history.push('/user');
      }
    } catch (error) {
      if (!erroSignIn) setErroSignIn(!erroSignIn);
    }
  };

  return (
    <UserSignIn>
      <div>
        <Title>
          Bem vindo
          {' '}
          <br />
          {' '}
          de volta!
        </Title>
        <Line />

        <Form onSubmit={handleSubmit}>

          <Wrapper>
            <FiUser />
            <Input
              type="text"
              placeholder="Digite seu apelido"
              value={signInValues.nick_name}
              setInputValue={(value) => setSignInValues({ ...signInValues, nick_name: value })}
            />
          </Wrapper>

          <Wrapper>
            <FiLock />

            <Input
              type={!showPassword ? 'password' : 'text'}
              placeholder="Sua senha"
              value={signInValues.password}
              setInputValue={(value) => setSignInValues({ ...signInValues, password: value })}

            />

            <Title onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <FiEye /> : <FiEyeOff />}
            </Title>
          </Wrapper>
          {erroSignIn && <MessageError>Apelido ou senha inválidos</MessageError>}

          <Buttons>

            <Link to="signup">
              <Button>
                CADASTRAR
              </Button>
            </Link>

            <Button type="submit">
              ENTRAR
            </Button>

          </Buttons>
        </Form>
      </div>
    </UserSignIn>
  );
}

export default SignIn;
