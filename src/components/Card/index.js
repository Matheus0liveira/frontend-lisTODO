import React from 'react';
import { FiXSquare, FiCheckSquare } from 'react-icons/fi';

import { Wrapper, Title } from './styles';
function Card({ title, description, createdAt }) {

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
          <FiXSquare delete='delete' />
          <FiCheckSquare />
        </div>

      </footer>




    </Wrapper>
  )


};


export default Card;
