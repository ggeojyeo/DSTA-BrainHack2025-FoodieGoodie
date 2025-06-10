import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState({});

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};
