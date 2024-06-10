import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function QueryResult() {
  const { query } = useLocalSearchParams();

  return (
    <View>
      <Text>{query}</Text>
    </View>
  );
}
