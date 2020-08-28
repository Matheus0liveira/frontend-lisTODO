import React from 'react';
import useUsers from '../../utils/useUser';
import api from '../../services/api';

import { FiXSquare, FiCheckSquare } from 'react-icons/fi';

import { Wrapper, Title } from './styles';




function Card({ id, title, description, createdAt, deleteTask }) {


  const date = createdAt.split('T')[0];

  return (


    <Wrapper>


      <header>

        <Title>{title}</Title>
        <Title date='date'> {date}</Title>

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




    </Wrapper>
  )


};


export default Card;
