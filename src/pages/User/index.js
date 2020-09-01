import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';

import api from '../../services/api';
import useUser from '../../utils/useUser';

import Header from '../../components/Header';
import Tasks from '../../components/Tasks';



import { Main } from './styles';

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


  const linkRef = useRef(null);
  const history = useHistory();


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
    sessionStorage.removeItem('user');
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
      <Header
        handleCreateTask={handleCreateTask}
        handleMoveToSigninPage={handleMoveToSigninPage}
        task={task}
        setTask={setTask}
        arrayTasks={arrayTasks}
        handleDeleteTask={handleDeleteTask}
        linkCreate={linkRef}
      />


      <Main>


        <Tasks tasks={arrayTasks} handleDeleteTask={handleDeleteTask} />


      </Main>

    </>

  );

};

export default User;
