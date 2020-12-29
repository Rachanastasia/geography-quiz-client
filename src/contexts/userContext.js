import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {


  const value = {}

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}