import { Stack } from "expo-router";
import { CurrentMonsterProvider } from "./state/CurrentMonsterContext";

export default function RootLayout() {
  return (
    <CurrentMonsterProvider>
      <Stack>
        {/* <Stack.Screen name="(drawers)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CurrentMonsterProvider>
  );
}
