import { useContext, useReducer } from "react";
import { MonsterContext } from "./MonsterContext";
import { reducer } from "../Reducer";
import { Monster } from "@/app/types/types";
import { MonsterContextType } from "@/app/types/types";
import dB from "../../../dB/db.json";

// const monsters = useContext(MonsterContext);

const initialState: Monster[] = dB.monsters;

export const MonsterProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};
