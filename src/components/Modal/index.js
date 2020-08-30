import React from 'react';


import {
  StyledModal,
  Close,
  WrapperInput,
  Button,
  Form
} from './styles';


import {
  FiX,
  FiEdit,
  FiAlignJustify
} from 'react-icons/fi';


import Input from '../Input';

function Modal({ handleCreateTask, task, setTask, referenie }) {



  return (

    <StyledModal id="openModel" className="modal">
      <Close href="#exitModel" title="Fechar" className="exitModel"> <FiX /> </Close>

      <Form onSubmit={handleCreateTask}>

        <WrapperInput>
          <FiEdit />
          <Input
            type={'text'}
            placeholder={'Título'}
            value={task.title}
            setInputValue={(value) => setTask({ ...task, title: value })}

          />
        </WrapperInput>


        <WrapperInput>
          <FiAlignJustify />

          <Input

            type={'text'}
            placeholder={'Descrição'}
            value={task.description}
            setInputValue={(value) => setTask({ ...task, description: value })}


          />
        </WrapperInput>


        <a href="#exitModel" title="Fechar" className="exitModel" ref={referenie}>
        </a>

        <Button type='submit'>
          ADICIONAR
        </Button>


      </Form>
    </StyledModal>
  );

};



export default Modal;
