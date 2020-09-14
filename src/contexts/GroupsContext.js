import React, { createContext, useState, useEffect } from 'react';

export const GroupsContext = createContext();

export const GroupsContextProvider = ({ children }) => {
  const DEFAULT_STATE = {
    groups: [],
    hasGroups: false
  };

  const [groupsState, setGroupsState] = useState(DEFAULT_STATE);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch('/groups');
      let data = [];

      if (res.status !== 500) {
        data = await res.json();
      }

      setGroupsState(prevState => ({
        ...prevState,
        groups: data,
        hasGroups: true
      }));
    };

    fetcher();
  }, [setGroupsState]);

  return (
    <GroupsContext.Provider value={[groupsState, setGroupsState]}>
      {children}
    </GroupsContext.Provider>
  );
};
