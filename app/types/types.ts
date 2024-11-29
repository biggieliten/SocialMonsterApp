export type Comment = {
  id: number;
  text: string;
  authorId: number;
};

export type Post = {
  id: number;
  title?: string;
  text?: string;
  authorId?: number;
  comments?: Comment[];
};

export type Monster = {
  id: number;
  name: string;
  color: string;
  eyes: number;
};

export type CurrentMonsterContextType = {
  currentMonster?: Monster;
  setCurrentMonster: (monster: Monster) => void;
};

export type MonsterContextType = {};
