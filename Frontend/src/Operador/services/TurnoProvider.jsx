import React, { createContext, useState, useContext } from 'react';

const TurnoContext = createContext();

export function TurnoProvider({ children }) {
  const [currentTurn, setCurrentTurn] = useState(null);

  const value = {
    currentTurn,
    setCurrentTurn
  };

  return (
    <TurnoContext.Provider value={value}>
      {children}
    </TurnoContext.Provider>
  );
}

export const useTurno = () => useContext(TurnoContext);