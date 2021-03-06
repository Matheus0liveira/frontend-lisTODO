import React from 'react';

import {
  FiX,
  FiEdit,
  FiAlignJustify,
} from 'react-icons/fi';
import {
  StyledModal,
  Close,
  WrapperInput,
  Button,
  Form,
} from './styles';

import Input from '../Input';

function Modal({
  handleCreateTask, task, setTask, referencie,
}) {



  return (

    <StyledModal id="openModel" className="modal">
      <Close href="#exitModel" title="Fechar" className="exitModel" ref={referencie}>
        {' '}
        <FiX />
        {' '}
      </Close>

      <Form onSubmit={handleCreateTask}>

        <WrapperInput>
          <FiEdit />
          <Input
            type="text"
            placeholder="Título"
            value={task.title}
            setInputValue={(value) => setTask({ ...task, title: value })}

          />
        </WrapperInput>

        <WrapperInput>
          <FiAlignJustify />

          <Input
            type="text"
            placeholder="Descrição"
            value={task.description}
            setInputValue={(value) => setTask({ ...task, description: value })}
          />

        </WrapperInput>


        <Button type="submit">
          ADICIONAR
        </Button>

      </Form>
    </StyledModal>
  );
}

export default Modal;
