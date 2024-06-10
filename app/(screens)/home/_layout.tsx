import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="home/index" options={{ title: "Tela inicial" }} />
        <Stack.Screen name="search/query" options={{ title: "Tela inicial" }} />
      </Stack>
    </SafeAreaProvider>
  );
}