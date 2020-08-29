import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../../utils/useUser';
import api from '../../services/api';

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
  const [arrayTasks, setArrayTasks] = useState([]);
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
  useEffect(() => {

    const USER_TOKEN = userValues.token;

    const auth = 'Bearer '.concat(USER_TOKEN);

    (async () => {
      const tasks = await api.get(
        `/users/${userValues.user.id}/tasks`,
        {
          headers:
          {
            Authorization: auth
          }
        });

      setArrayTasks(tasks.data);

    })();

  }, [userValues]);




  async function handleDeleteTask(id) {


    const newArraytasks = arrayTasks.filter(task => id !== task.id);

    setArrayTasks(newArraytasks);


    const USER_TOKEN = userValues.token;
    const auth = 'Bearer '.concat(USER_TOKEN);

    await api.delete(`/users/${userValues.user.id}/tasks/${id}`, {

      headers: {
        Authorization: auth,
      }
    })


  };

  return (
    <>
      <Header>

        <Wrapper left='true'>
          <Image>
            <img src="https://avatars2.githubusercontent.com/u/58826355?s=460&u=8c805f2a4e708a2f3ff9c6095373bcb622f1dda2&v=4" alt="" />
          </Image>
          <WrappInfo>
            <Title>{userValues.user.name}</Title>
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

          <span onClick={handleMoveToSigninPage}>
            <FiLogOut />
          </span>

        </Wrapper>

      </Header>

      <Main>

        {arrayTasks.map(task => (

          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            createdAt={task.createdAt}
            deleteTask={handleDeleteTask}

          />

        ))}

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
