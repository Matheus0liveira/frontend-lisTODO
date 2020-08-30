import { useState, useEffect } from 'react';

function usePersistState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValeue = sessionStorage.getItem(key);

    if (storageValeue) {
      return JSON.parse(storageValeue);
    }

    return initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistState;
