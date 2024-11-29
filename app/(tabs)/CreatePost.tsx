import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { CurrentMonsterContextType, Post } from "../types/types";
import { useCurrentMonsterContext } from "../state/CurrentMonsterContext";
import { useGet } from "../hooks/useGet";
import { usePost } from "../hooks/usePost";
import { findMaxValueInArray } from "../utils/findMaxValueInArray";
import { MonsterContext } from "../state/Monsters/MonsterContext";
export default function CreatePost() {
  const { currentMonster }: CurrentMonsterContextType =
    useCurrentMonsterContext();

  const { dispatch, state } = useContext(MonsterContext);

  const { data, loading, error } = useGet<Post[]>(
    "http://localhost:3000/posts"
  );
  console.log(state, "state");
  const { requestPost } = usePost<Post>("http://localhost:3000/posts");

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const arr: number[] = [];
  data?.map((posts) => {
    arr.push(Number(posts.id));
  });

  const nextPostId: number = Math.max(...arr) + 1;

  //   const nextPostId = data ? findMaxValueInArray(data) + 1 : 1;
  console.log("🚀 ~ CreatePost ~ nextPostId:", nextPostId);

  const postNewPost = async () => {
    const newPost: Post = {
      id: nextPostId,
      title: title,
      text: text,
      authorId: currentMonster?.id,
      comments: [],
    };

    await requestPost(newPost, "POST");
  };
  console.log(text, title, "text and title");
  //   console.log(newPost, "new post");
  return (
    <View>
      {currentMonster ? (
        <>
          <Text>Create post</Text>
          <View>
            <Text>Title</Text>
            <TextInput onChangeText={setTitle} value={title}></TextInput>
          </View>
          <View>
            <Text>Content</Text>
            <TextInput onChangeText={setText} value={text}></TextInput>
          </View>
          <Pressable onPress={postNewPost}>Send post</Pressable>
        </>
      ) : (
        <Text> Login to create a post</Text>
      )}
    </View>
  );
}
