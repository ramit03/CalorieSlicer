import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodListItem from "../components/FoodListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FoodListItem item={{label:"Pizza",cal:475, brand:"domoinos"}}/>
      <FoodListItem item={{label:"Apple",cal:75, brand:"Generic"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    justifyContent: "center",
    padding: 10,
    gap:5,
  },
});
