import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../../utils/useUser';
import {

  Header,
  Wrapper,
  WrappInfo,
  Image,
  Title,
  SubmitButton,
  Main,
} from './styles';


import {
  FiLogOut,
  FiClock,
  FiBook
} from 'react-icons/fi';


import Card from '../../components/Card';
import Modal from '../../components/Modal';

function User() {
  const [task, setTask] = useState(
    {
      title: '',
      description: ''
    }
  );
  const { userValues, setUserValues } = useUser();
  const history = useHistory();


  function handleSubmit(event) {
    return event.preventDefault();
  };

  function handleMoveToSigninPage() {
    setUserValues({});
    sessionStorage.clear();
    history.push('/signin');

  }


  return (
    <>
      <Header>

        <Wrapper left='true'>
          <Image>
            <img src="https://avatars2.githubusercontent.com/u/58826355?s=460&u=8c805f2a4e708a2f3ff9c6095373bcb622f1dda2&v=4" alt="" />
          </Image>
          <WrappInfo>
            <Title>{userValues.User.name}</Title>
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

          <a onClick={handleMoveToSigninPage}>
            <FiLogOut />
          </a>

        </Wrapper>

      </Header>

      <Main>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </Main>
      <Modal
        handleSubmit={handleSubmit}
        task={task}
        setTask={setTask}
      />





    </>
  );
};



export default User;
