import React, { createContext, useState, useEffect } from 'react';

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const DEFAULT_STATE = {
    user: null,
    hasSession: false
  };

  const [sessionState, setSessionState] = useState(DEFAULT_STATE);

  useEffect(() => {    
    const fetcher = async () => {
      const res = await fetch('/session');
      let data = null;

      if (res.status !== 500) {
        data = await res.json();
      }

      setSessionState(prevState => ({
        ...prevState,
        user: data,
        hasSession: true
      }));
    };

    fetcher();
  }, [setSessionState]);

  return (
    <SessionContext.Provider value={[sessionState, setSessionState]}>
      {children}
    </SessionContext.Provider>
  );
};
