import { createContext } from "react";
import { MonsterContextType } from "@/app/types/types";
import { monsters, posts } from "../../../dB/db.json";
import { Monster } from "@/app/types/types";

export const MonsterContext = createContext<{
  state: Monster[];
  dispatch: React.Dispatch<any>;
}>({ state: monsters, dispatch: () => null });
// ({} as MonsterContextType);
