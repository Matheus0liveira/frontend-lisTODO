import React, { createContext } from 'react';
import usePersistState from '../utils/usePersistState';

export const UserContext = createContext();

const initialValues = {
  user: {
    id: '',
    name: '',
    nick_name: '',
    email: '',
  },
  token: '',
};

function UserProvider({ children }) {
  const [userValues, setUserValues] = usePersistState('user', initialValues);

  return (

    <UserContext.Provider value={{ userValues, setUserValues }}>

      {children}

    </UserContext.Provider>

  );
}

export default UserProvider;
