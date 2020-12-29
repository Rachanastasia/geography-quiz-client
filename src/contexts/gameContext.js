import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export function GameContextProvider({ children }) {


  const value = {}

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}