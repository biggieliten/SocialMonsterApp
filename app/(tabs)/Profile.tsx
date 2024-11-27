import { View, Text } from "react-native";
import { useMonsterContext } from "../state/MonsterContext";
import { MonsterContextType, Monster, Post } from "../types/types";
import { useGet } from "../hooks/useGet";
import { List } from "react-native-paper";
import { useEffect, useState } from "react";
// import { getMonsters } from "../helpers/apiCalls";

export default function Profile() {
  const { currentMonster, setCurrentMonster }: MonsterContextType =
    useMonsterContext();

  const [expanded, setExpanded] = useState<boolean>(false);

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

  if (monstersLoading || postsLoading) {
    return <Text>Loading....</Text>;
  }

  if (monstersError || postsError) {
    return <Text>Error loading data</Text>;
  }

  function switchMonster(monster: Monster) {
    setCurrentMonster(monster);
    setExpanded(!expanded);
  }

  const filteredPosts = p?.filter(
    (post) => post.authorId === currentMonster?.id
  );

  return (
    <>
      <List.Section>
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
        style={{ justifyContent: "center", alignItems: "center", width: "90%" }}
      >
        {/* <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <Text>{currentMonster?.name}</Text>
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
        {/* {filteredPosts.length > 0 ? (
          filteredPosts.map((post: Post) => (
            <View key={post.id}>
              <Text style={{ fontWeight: "bold" }}>{post.title}</Text>
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
          ))
        ) : (
          <Text>No posts available</Text>
        )} */}
      </View>
    </>
  );
}

// // import CircularIndeterminate from "../components/Loading";

// export default function Profile() {
//   const { currentMonster, setCurrentMonster }: MonsterContextType =
//     useMonsterContext();

//   //   const [monsterId] = useState<any>(currentMonster?.id);

//   const [expanded, setExpanded] = useState<boolean>(false);

//   const {
//     data: m,
//     loading: monstersLoading,
//     error: monstersError,
//   } = useGet<Monster[]>("http://localhost:3000/monsters");

//   const {
//     data: p,
//     loading: postsLoading,
//     error: postsError,
//   } = useGet<Post>("http://localhost:3000/posts/2");

//   if (p) {
//     console.log(JSON.stringify(p), "posts");
//   } else {
//     console.log("failed loading posts");
//   }
//   if (monstersLoading || postsLoading) {
//     return <Text>Loading....</Text>;
//   }

//   if (!Array.isArray(p)) {
//     console.log("Posts data is not an array:", p);
//     return <Text>Failed to load posts</Text>;
//   }

//   function switchMonster(monster: Monster) {
//     setCurrentMonster(monster);
//     setExpanded(!expanded);
//   }

//   const filteredPosts = p.authorId === currentMonster?.id ? [p] : [];

//   return (
//     <>
//       <List.Section>
//         <List.Accordion
//           expanded={expanded}
//           onPress={() => setExpanded(!expanded)}
//           title={currentMonster ? currentMonster.name : "Pick a Monster"}
//         >
//           {m?.map((monster: Monster) => (
//             <List.Item
//               key={monster.id}
//               title={monster.name}
//               onPress={() => switchMonster(monster)}
//               style={{
//                 borderBottomWidth: 1,
//                 borderBottomColor: "black",
//                 marginLeft: 10,
//                 marginRight: 10,
//               }}
//             />
//           ))}
//         </List.Accordion>
//       </List.Section>
//       <View
//         style={{ justifyContent: "center", alignItems: "center", width: "90%" }}
//       >
//         <Text>{currentMonster?.name}</Text>
//         {filteredPosts.length > 0 ? (
//           filteredPosts.map((post: Post) => (
//             <View key={post.id}>
//               <Text style={{ fontWeight: "bold" }}>{post.title}</Text>
//               <Text>{post.text}</Text>
//               {post.comments && post.comments.length > 0 && (
//                 <View style={{ marginTop: 10 }}>
//                   <Text style={{ fontStyle: "italic" }}>Comments:</Text>
//                   {post.comments.map((comment) => (
//                     <Text key={comment.id}>- {comment.text}</Text>
//                   ))}
//                 </View>
//               )}
//             </View>
//           ))
//         ) : (
//           <Text>No posts available</Text>
//         )}
//       </View>
//     </>
//   );
// }

// import CircularIndeterminate from "../components/Loading";
