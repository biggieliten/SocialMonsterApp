import React, { createContext, useState, useContext } from "react";
import { Monster, CurrentMonsterContextType } from "../types/types";

const CurrentMonsterContext = createContext({} as CurrentMonsterContextType);

export const CurrentMonsterProvider = ({ children }: any) => {
  const [currentMonster, setCurrentMonster] = useState<Monster>();

  return (
    <CurrentMonsterContext.Provider
      value={{ currentMonster, setCurrentMonster }}
    >
      {children}
    </CurrentMonsterContext.Provider>
  );
};

export const useCurrentMonsterContext = () => {
  const context = useContext(CurrentMonsterContext);
  return context;
};
