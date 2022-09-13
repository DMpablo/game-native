import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/index";
import { StartGameScreen } from "./screens/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="¿Cual es el más cercano?" />
      <StartGameScreen />
    </View>
  );
}
