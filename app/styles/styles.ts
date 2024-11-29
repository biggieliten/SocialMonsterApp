import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  FeedContainer: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    borderBlockColor: "black",

    backgroundColor: "#F2FBE0",
  },
  commentContainer: {
    width: "80%",

    marginTop: 10,
    borderBlockColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,

    backgroundColor: "#ACC18A",
  },
  currentMonsterText: {
    color: "white",
    fontWeight: "600",
  },
});

/*
 Colors
 dark: #605B56
 lightDark: #837A75
 greenDark: #ACC18A
 greenLight: #DAFEB7
 beige: #F2FBE0
*/
