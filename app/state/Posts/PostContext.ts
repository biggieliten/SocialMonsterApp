import { createContext } from "react";
import { posts } from "../../../dB/db.json";
import { Post } from "@/app/types/types";

export const PostContext = createContext<{
  state: Post[];

  //Replace the type any with type Action later
  dispatch: React.Dispatch<any>;
}>({ state: posts, dispatch: () => null });
