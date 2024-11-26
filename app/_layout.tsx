import { Stack } from "expo-router";
import { MonsterProvider } from "./state/MonsterContext";

export default function RootLayout() {
  return (
    <MonsterProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </MonsterProvider>
  );
}
