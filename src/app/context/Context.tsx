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
  const [refresh, setRefresh] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        bookmarkCount,
        setBookmarkCount,
        setRefresh,
        refresh,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
