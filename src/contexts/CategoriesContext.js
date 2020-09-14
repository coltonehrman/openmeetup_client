import React, { createContext, useState, useEffect } from 'react';

export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const DEFAULT_STATE = {
    categories: [],
    hasCategories: false
  };

  const [categoriesState, setCategoriesState] = useState(DEFAULT_STATE);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch('/categories');
      let data = [];

      if (res.status !== 500) {
        data = await res.json();
      }

      setCategoriesState(prevState => ({
        ...prevState,
        categories: data,
        hasCategories: true
      }));
    };

    fetcher();
  }, [setCategoriesState]);

  return (
    <CategoriesContext.Provider value={[categoriesState, setCategoriesState]}>
      {children}
    </CategoriesContext.Provider>
  );
};
