import { useContext } from 'react';
import { UserContext } from '../context/user';

function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used whitin a UserProvider');

  const { userValues, setUserValues } = context;

  return { userValues, setUserValues };
}

export default useUser;
