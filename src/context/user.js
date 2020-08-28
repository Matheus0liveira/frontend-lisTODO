import React, { createContext, useState } from 'react';
import usePersistState from '../utils/usePersistState';


export const UserContext = createContext();


function UserProvider({ children }) {
  const [userValues, setUserValues] = usePersistState('user', {});


  return (

    <UserContext.Provider value={{ userValues, setUserValues }}>

      {children}

    </UserContext.Provider>


  );

};


export default UserProvider;
