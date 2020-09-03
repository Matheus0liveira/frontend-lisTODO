import React from 'react';

import Lottie from 'react-lottie';

import empty from '../../assets/lottie/empty.json';
import { Title, Empty } from './styles';


import Card from '../../components/Card';



function Tasks({ tasks, handleDeleteTask, sucessTask, disableButtons }) {

  const defaultEmpty = {
    loop: true,
    autoplay: true,
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (


    tasks.length === 0
      ?
      <Empty>
        <Lottie options={defaultEmpty} isClickToPauseDisabled width={200} />
        <Title>Sem tarefas <br /> no momento</Title>
      </Empty>
      :


      tasks.map((task) => (

        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          createdAt="Em breve"
          deleteTask={handleDeleteTask}
          sucessTask={sucessTask}
          showButtons={disableButtons}

        />
      ))


  );
};

export default Tasks;
