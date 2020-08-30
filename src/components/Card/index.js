import React from 'react';


import { FiXSquare, FiCheckSquare } from 'react-icons/fi';

import { Wrapper, Title } from './styles';




function Card({ id, title, description, createdAt, deleteTask }) {



  return (

    <Wrapper>


      <header>

        <Title>{title}</Title>
        <Title date> {createdAt}</Title>

      </header>

      <main>

        <p>
          {description}
        </p>

      </main>

      <footer>

        <div>
          <FiXSquare delete='delete' onClick={() => deleteTask(id)} />
          <FiCheckSquare />
        </div>

      </footer>

    </Wrapper >
  );


};

export default Card;
