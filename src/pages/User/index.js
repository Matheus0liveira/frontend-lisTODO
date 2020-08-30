import React, { useState, useEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import {
  FiLogOut,
  FiClock,
  FiBook,
} from 'react-icons/fi';
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

import Card from '../../components/Card';
import Modal from '../../components/Modal';

function User() {
  const [arrayTasks, setArrayTasks] = useState([]);
  const [task, setTask] = useState(
    {
      id: v4(),
      title: '',
      description: '',
    },
  );
  const { userValues, setUserValues } = useUser();

  const history = useHistory();
  const linkRef = useRef(null);

  useEffect(() => {
    if (!task.id) {
      return setTask(({ ...task, id: v4() }));
    }
  }, [task.title, task]);

  useEffect(() => {
    const { token } = userValues;

    const auth = ` Bearer ${token}`;

    (async () => {
      const tasks = await api.get(
        `/users/${userValues.user.id}/tasks`,
        { headers: { Authorization: auth } },
      );

      setArrayTasks(tasks.data);
    })();
  }, [userValues]);

  const handleCreateTask = (event) => {
    event.preventDefault();

    if (!task.title || !task.description) {
      return alert('Preencha todos os campos!');
    }

    const newArray = arrayTasks;

    newArray.push(task);

    setArrayTasks(newArray);

    linkRef.current.click();

    const { title, description } = task;

    (async () => {
      const USER_TOKEN = userValues.token;
      const auth = `Bearer ${USER_TOKEN}`;

      await api.post(`/users/${userValues.user.id}/tasks`,
        {
          title,
          description,
        },
        {
          headers:
          {
            Authorization: auth,
          },
        });

      setTimeout(() => setTask({ title: '', description: '' }), 1000);
    })();
  };

  const handleMoveToSigninPage = () => {
    setUserValues(
      {
        user: {
          id: '',
          name: '',
          nick_name: '',
          email: '',
        },
        token: '',
      },
    );
    sessionStorage.clear();
    history.push('/signin');
  };

  const handleDeleteTask = async (id) => {
    const newArraytasks = arrayTasks.filter((task) => id !== task.id);

    setArrayTasks(newArraytasks);

    const { token } = userValues;
    const auth = `Bearer ${token}`;

    await api.delete(`/users/${userValues.user.id}/tasks/${id}`, {

      headers: {
        Authorization: auth,
      },
    });
  };

  return (
    <>
      <Header>
        <Wrapper left>
          <Image>
            <img
              src="https://avatars2.githubusercontent.com/u/58826355?s=460&
            u=8c805f2a4e708a2f3ff9c6095373bcb622f1dda2&v=4"
              alt=""
            />
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
                <span>{arrayTasks.length}</span>
              </div>

            </div>

            <SubmitButton href="#openModel" type="submit"> CRIAR</SubmitButton>

          </WrappInfo>

        </Wrapper>

        <Wrapper right>

          <Title onClick={handleMoveToSigninPage}>
            <FiLogOut />
          </Title>

        </Wrapper>

      </Header>

      <Main>

        {arrayTasks.map((task) => (

          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            createdAt="Em breve"
            deleteTask={handleDeleteTask}
          />
        ))}

      </Main>
      <Modal
        handleCreateTask={handleCreateTask}
        task={task}
        setTask={setTask}
        referenie={linkRef}
      />

    </>
  );
}

export default User;
