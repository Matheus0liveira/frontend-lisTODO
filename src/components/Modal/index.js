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
  FiAlignJustify,
  FiAlertTriangle
} from 'react-icons/fi';


import Input from '../Input';

function Modal({ handleSubmit }) {

  return (

    <StyledModal id="openModel" className="modal">
      <Close href="#exitModel" title="Fechar" className="exitModel"><FiX /></Close>

      <Form onSubmit={handleSubmit}>

        <WrapperInput>
          <FiEdit />
          <Input
            type={'text'}
            placeholder={'Título'}
          />
        </WrapperInput>

        <WrapperInput>
          <FiAlignJustify />
          <Input
            type={'text'}
            placeholder={'Descrição'}
          />
        </WrapperInput>

        <WrapperInput>
          <FiAlertTriangle />
          <Input
            type={'text'}
            placeholder={'Digite seu apelido'}
          />
        </WrapperInput>

        <Button type='submit' >
          ADICIONAR
            </Button>

      </Form>
    </StyledModal>
  );

};



export default Modal;
