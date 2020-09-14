import React, { createContext, useState, useLayoutEffect } from 'react';
import _ from 'lodash';

export const GlobalErrorContext = createContext();

const ErrorElement = ({ errorMessage, selfDestruct, timer = 5000 }) => {
  useLayoutEffect(() => {
    const timeout = setTimeout(selfDestruct, timer);
    return () => clearTimeout(timeout);
  }, []); // eslint-disable-line

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,0,0,0.5)',
      color: '#fff'
    }}>
      <p>{errorMessage}</p>
    </div>
  );
};

export const GlobalErrorContextProvider = ({ children }) => {
  const DEFAULT_STATE = {
    errors: [],
    maxErrors: 5
  };

  const [errorState, setErrorState] = useState(DEFAULT_STATE);
  const { errors } = errorState;

  const pushError = (error) => {
    const newError = {
      error,
      id: _.uniqueId()
    };

    setErrorState((currentState) => {
      const {
        maxErrors,
        errors: currentErrors,
      } = currentState;

      return {
        ...currentState,
        errors: [newError, ...currentErrors.slice(0, maxErrors - 1)]
      };
    });
  };

  const removeError = (id) => () => {
    setErrorState((currentState) => {
      const { errors: currentErrors } = currentState;

      return {
        ...currentState,
        errors: currentErrors.filter(e => e.id !== id)
      };
    });
  };

  return (
    <GlobalErrorContext.Provider value={[errorState, pushError]}>
      <div style={{
        top: '20%',
        left: '10%',
        right: '10%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 1000000
      }}>
        {errors.map(({ error, id }) => (
          <ErrorElement key={id} errorMessage={error} selfDestruct={removeError(id)} />
        ))}
      </div>

      {children}
    </GlobalErrorContext.Provider>
  );
};
