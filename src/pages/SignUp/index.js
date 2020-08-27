import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import { UserLogon, Form, Wrapper, Title, Line, Buttons, Button } from './styles'

import { FiEdit3, FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'


function SignUp() {

  const [signInValues, setSignInValues] = useState(
    {
      name: '',
      nickName: '',
      email: '',
      password: ''
    }
  );

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
              setInputValue={(value) => setSignInValues({ ...signInValues, name: value })}
              type={'text'}
              value={signInValues.name}
              placeholder={'Nome Completo'}
            />
          </Wrapper>


          <Wrapper>
            <FiUser />
            <Input
              setInputValue={(value) => setSignInValues({ ...signInValues, nickName: value })}
              type={'text'}
              value={signInValues.nickName}
              placeholder={'Seu apelido'}
            />
          </Wrapper>


          <Wrapper>
            <FiMail />
            <Input
              setInputValue={(value) => setSignInValues({ ...signInValues, email: value })}
              type={'email'}
              value={signInValues.email}
              placeholder={'E-mail'}
            />
          </Wrapper>


          <Wrapper>
            <FiLock />
            <Input
              setInputValue={(value) => setSignInValues({ ...signInValues, password: value })}
              type={!showPassword ? 'password' : 'text'}
              value={signInValues.password}
              placeholder={'Sua melhor senha'}
            />


            <span onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </Wrapper>


          <Buttons>
            <Link to='signin'>
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

export default SignUp;
