import React from 'react';

import Lottie from 'react-lottie';

import empty from '../../assets/lottie/empty.json';
import { Title, Empty } from './styles';

import Card from '../Card';



function CheckTask({ checkTasks, handleDeleteTask }) {

  const defaultEmpty = {
    loop: true,
    autoplay: true,
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (

    <>
      {/* <Title>Checked List</Title> */}
      {checkTasks.length === 0
        ?
        <Empty>
          <Lottie
            options={defaultEmpty}
            isClickToPauseDisabled
            width={200}
          />

          <Title>Sem tarefas <br /> no momento</Title>


        </Empty>

        :

        checkTasks.map((task) => (

          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            createdAt="Em breve"
            deleteTask={handleDeleteTask}

          />
        ))
      }
    </>


  );
};

export default CheckTask;
