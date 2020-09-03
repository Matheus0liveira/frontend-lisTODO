import React from 'react';

import { FiXSquare, FiCheckSquare } from 'react-icons/fi';

import { Wrapper, Title } from './styles';

function Card({
  id, title, description, createdAt, deleteTask, sucessTask
}) {

  const newTitle = title.substring(0, 10);

  return (

    <Wrapper>

      <header>

        <Title>{newTitle.length >= 5 ? `${newTitle}...` : newTitle}</Title>
        <Title date>
          {' '}
          {createdAt}
        </Title>

      </header>

      <main>

        <p>
          {description}
        </p>

      </main>

      <footer>

        <div>
          <FiXSquare delete="delete" onClick={() => deleteTask(id)} />
          <FiCheckSquare onClick={() => sucessTask(id)} />
        </div>

      </footer>

    </Wrapper>
  );
}

export default Card;
