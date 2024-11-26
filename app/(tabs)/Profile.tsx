import { View, Text } from "react-native";
import { useMonsterContext } from "../state/MonsterContext";
import { MonsterContextType, Monster } from "../types/types";
import { useGet } from "../hooks/useGet";
import { List } from "react-native-paper";
import { useState } from "react";
// import CircularIndeterminate from "../components/Loading";

export default function Profile() {
  const {
    data: m,

    loading,
    error,
  } = useGet<Monster[]>("http://localhost:3000/monsters");

  const { currentMonster, setCurrentMonster }: MonsterContextType =
    useMonsterContext();

  const [expanded, setExpanded] = useState<boolean>(false);

  //   if (loading) return <CircularIndeterminate />;

  function switchMonster(monster: Monster) {
    setCurrentMonster(monster);
    setExpanded(!expanded);
  }

  return (
    <>
      <List.Section>
        <List.Accordion
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
          title={currentMonster?.name}
        >
          {m?.map((m: Monster) => (
            <List.Item
              title={m.name}
              onPress={() => switchMonster(m)}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "black",
                marginLeft: 10,
                marginRight: 10,
              }}
            ></List.Item>
          ))}
        </List.Accordion>
      </List.Section>
      <View>
        <Text>{currentMonster?.name}</Text>
      </View>
    </>
  );
}
