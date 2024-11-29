import { View, Text } from "react-native";
import { useCurrentMonsterContext } from "../state/CurrentMonsterContext";
import { CurrentMonsterContextType, Monster, Post } from "../types/types";
import { useGet } from "../hooks/useGet";
import { List } from "react-native-paper";
import { useEffect, useState } from "react";
import { styles } from "../styles/styles";
import CircularIndeterminate from "../components/Loading";
// import { getMonsters } from "../helpers/apiCalls";

export default function Profile() {
  const { currentMonster, setCurrentMonster }: CurrentMonsterContextType =
    useCurrentMonsterContext();

  const [expanded, setExpanded] = useState<boolean>(false);

  const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>([]);

  const {
    data: m,
    loading: monstersLoading,
    error: monstersError,
  } = useGet<Monster[]>("http://localhost:3000/monsters");

  const {
    data: p,
    loading: postsLoading,
    error: postsError,
  } = useGet<Post[]>(`http://localhost:3000/posts`);

  useEffect(() => {
    if (p && currentMonster) {
      const filter = p?.filter((post) => post.authorId === currentMonster?.id);
      setFilteredPosts(filter);
    }
  }, [p, currentMonster]);

  if (monstersLoading || postsLoading) {
    return <CircularIndeterminate />;
  }

  if (monstersError || postsError) {
    return <Text>Error loading data</Text>;
  }

  function switchMonster(monster: Monster) {
    setCurrentMonster(monster);
    setExpanded(!expanded);
  }

  return (
    <View style={{ width: "100%" }}>
      <List.Section
        style={{
          backgroundColor: "#282929",
        }}
      >
        <List.Accordion
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          title={currentMonster ? currentMonster.name : "Pick a Monster"}
        >
          {m?.map((monster: Monster) => (
            <List.Item
              key={monster.id}
              title={monster.name}
              onPress={() => switchMonster(monster)}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "black",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
          ))}
        </List.Accordion>
      </List.Section>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        {currentMonster ? (
          <View
            style={{
              width: "95%",
              borderWidth: 1,
              borderColor: "#f0eeeb",
              borderRadius: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "#282929",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                position: "absolute",
                alignSelf: "center",
                fontWeight: "bold",
              }}
            >
              About
            </Text>
            <Text style={[styles.currentMonsterText, { paddingTop: 20 }]}>
              {currentMonster?.name}
            </Text>
            <View>
              <Text style={[styles.currentMonsterText, {}]}>
                Color: {currentMonster?.color}
              </Text>
            </View>
            <View>
              <Text style={[styles.currentMonsterText, {}]}>
                Amount of eyes: {currentMonster?.eyes}
              </Text>
            </View>
          </View>
        ) : (
          <Text>Choose a monster</Text>
        )}
        {filteredPosts?.map((post: Post) => (
          <View
            style={{
              width: "85%",
              borderWidth: 1,
              borderColor: "#f0eeeb",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{post.title}</Text>
            <Text>{post.text}</Text>
            {post.comments && post.comments.length > 0 && (
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontStyle: "italic" }}>Comments:</Text>
                {post.comments.map((comment) => (
                  <Text key={comment.id}>- {comment.text}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
        {/* </View> */}
      </View>
    </View>
  );
}
