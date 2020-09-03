import React from 'react';
import {
  FiLogOut,
  FiClock,
  FiBook,
  FiCheckSquare
} from 'react-icons/fi';

import useUser from '../../utils/useUser';

import {

  StyledHeader,
  Wrapper,
  WrappInfo,
  Image,
  Title,
  SubmitButton,
  CheckBox
} from './styles';

import Modal from '../Modal';

function Header(
  {
    arrayTasks,
    handleCreateTask,
    setTask,
    task,
    handleMoveToSigninPage,
    handleUpdateMain,
    linkCreate,
    typeList
  }) {


  const { userValues } = useUser();



  const newName = userValues.user.name.substring(0, 16);


  return (


    <>

      <StyledHeader>
        <Wrapper left>
          <Image>
            <img
              src="https://avatars2.githubusercontent.com/u/58826355?s=460&
            u=8c805f2a4e708a2f3ff9c6095373bcb622f1dda2&v=4"
              alt=""
            />
          </Image>
          <WrappInfo>
            <Title>{newName.length >= 10 ? `${newName}...` : newName}</Title>
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

            <div>
              <SubmitButton href="#openModel" type="submit"> CRIAR</SubmitButton>
              <CheckBox themeButton={typeList} onClick={handleUpdateMain}> <FiCheckSquare /> </CheckBox>
            </div>
          </WrappInfo>

        </Wrapper>

        <Wrapper right>

          <span onClick={handleMoveToSigninPage}>
            <FiLogOut />
          </span>

        </Wrapper>

      </StyledHeader>


      <Modal
        handleCreateTask={handleCreateTask}
        task={task}
        setTask={setTask}
        referencie={linkCreate}
      />

    </>
  );
}

export default Header;
