export type Comment = {
  id: number;
  text: string;
  authorId: number;
};

export type Post = {
  id: number;
  title?: string;
  text?: string;
  authorId: number;

  comments?: Comment[];
};

export type Monster = {
  id: number;
  name: string;
  color: string;
  eyes: number;
};

export type MonsterContextType = {
  currentMonster: Monster;
  setCurrentMonster: (monster: Monster) => void;
};
