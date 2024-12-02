import { useReducer } from "react";
import { PostContext } from "./PostContext";
import { reducer } from "../Reducer";
import { Post } from "@/app/types/types";
import dB from "../../../dB/db.json";

const initialPosts: Post[] = dB.posts;

export const PostProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialPosts);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
