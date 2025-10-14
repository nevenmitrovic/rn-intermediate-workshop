import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "@/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});
