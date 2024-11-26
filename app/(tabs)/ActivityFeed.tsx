import React from "react";
import { Post } from "../types/types";
import { View, Text } from "react-native";
import { useGet } from "../hooks/useGet";
import { styles } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";

export default function ActivityFeed() {
  const {
    data: posts,
    loading,
    error,
  } = useGet<Post[]>("http://localhost:3000/posts");

  return (
    <>
      {/* <Text>Activity Feed</Text> */}
      <ScrollView contentContainerStyle={styles.FeedContainer}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>{error}</Text>}
        {posts &&
          posts?.map((post: Post) => (
            <View style={styles.commentContainer} key={post.id}>
              <Text style={{ fontSize: 20, color: "black" }}>{post.title}</Text>
              <Text>
                {post.comments?.map((c: Post) => (
                  <Text key={c.id}>{c.text}</Text>
                ))}
              </Text>
            </View>
          ))}
      </ScrollView>
    </>
  );
}
