"use client";

import { ReactNode } from "react";

const { createContext, useState, useContext } = require("react");

const GlobalContext = createContext();

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const test = 123;

  return (
    <GlobalContext.Provider
      value={{
        bookmarkCount,
        setBookmarkCount,
        test,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
