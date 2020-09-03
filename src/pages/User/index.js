
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';

import api from '../../services/api';
import useUser from '../../utils/useUser';

import Header from '../../components/Header';
import Tasks from '../../components/Tasks';
import CheckTasks from '../../components/CheckTasks';



import { Main } from './styles';

function User() {

  const [arrayTasks, setArrayTasks] = useState([]);
  const [arrayCheckTasks, setArrayCheckTasks] = useState([]);

  const [task, setTask] = useState(
    {
      id: v4(),
      title: '',
      description: '',
    },
  );
  const [showListCheckTasks, setShowListCheckTasks] = useState(false);


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


      const checkTask = await api.get(
        `/users/${userValues.user.id}/checktasks`,
        { headers: { Authorization: auth } });


      const tasksNoChecked = tasks.data.filter(task => task.check === false);
      const tasksChecked = checkTask.data.filter(task => task.check === true);


      setArrayTasks(tasksNoChecked);
      setArrayCheckTasks(tasksChecked);
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


  const handleSucessTask = async (id) => {


    const { token } = userValues;
    const auth = `Bearer ${token}`;

    const { data } = await api.put(`/users/${userValues.user.id}/tasks/${id}`, { check: true }, {

      headers: {
        Authorization: auth,
      },
    });

    const newArrayTasks = arrayTasks.filter(task => task.id !== data.id);
    const newArrayCheckTasks = arrayTasks.filter(task => task.id === data.id);


    const newArrayCheckedTasks = arrayCheckTasks;

    newArrayCheckedTasks.push(newArrayCheckTasks[0]);

    setArrayTasks(newArrayTasks);
    setArrayCheckTasks(newArrayCheckedTasks);
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
        handleUpdateMain={() => setShowListCheckTasks(!showListCheckTasks)}
        typeList={showListCheckTasks}
      />


      <Main>
        {
          !showListCheckTasks
            ?

            (
              <Tasks
                tasks={arrayTasks}
                handleDeleteTask={handleDeleteTask}
                sucessTask={handleSucessTask}
                disableButtons={false}
              />

            )

            :

            (
              <>

                <CheckTasks
                  checkTasks={arrayCheckTasks}
                  disableButtons={true} />
              </>
            )
        }

      </Main>

    </>

  );

};

export default User;
