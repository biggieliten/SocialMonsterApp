import React, { createContext, useState, useContext } from "react";
import { Monster, MonsterContextType } from "../types/types";

const MonsterContext = createContext({} as MonsterContextType);

export const MonsterProvider = ({ children }: any) => {
  const [currentMonster, setCurrentMonster] = useState<Monster>();

  return (
    <MonsterContext.Provider value={{ currentMonster, setCurrentMonster }}>
      {children}
    </MonsterContext.Provider>
  );
};

export const useMonsterContext = () => {
  const context = useContext(MonsterContext);
  return context;
};
