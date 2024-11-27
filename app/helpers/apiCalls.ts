import { useGet } from "../hooks/useGet";

export const getMonsters = async () => {
  const { data, loading, error } = useGet("http://localhost:3000/monsters");
  return { data, loading, error };
};
