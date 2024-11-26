import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: { backgroundColor: "#25292e" },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#25292e" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />;
      <Tabs.Screen name="Profile" options={{ title: "Profile" }} />;
      <Tabs.Screen name="ActivityFeed" options={{ title: "Feed" }} />;
    </Tabs>
  );
}
