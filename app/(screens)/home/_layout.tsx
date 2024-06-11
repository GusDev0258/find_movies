import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Tela inicial" }} />
        <Stack.Screen name="movie/[movie]" options={{ title: "Filme" }} />
        <Stack.Screen name="search/index" options={{ title: "Pesquisa de Títulos" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
