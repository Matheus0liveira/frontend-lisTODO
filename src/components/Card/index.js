import React from 'react';
import { FiXSquare, FiCheckSquare } from 'react-icons/fi';

import { Wrapper, Title } from './styles';
function Card() {

  return (
    <Wrapper>

      <header>

        <Title>Title</Title>
        <Title date='date'> 22/10/2020</Title>

      </header>

      <main>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nec risus volutpat ultrices id nisl tortor.
          Aenean pulvinar dictum egestas sed.
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
