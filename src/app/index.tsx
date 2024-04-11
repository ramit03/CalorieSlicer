import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TextInput, Button } from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

const foodItems = [
  { label: "Pizza", cal: 475, brand: "domoinos" },
  { label: "Apple", cal: 75, brand: "Generic" },
  { label: "Black Coffee", cal: 10, brand: "Americano" },
];

export default function App() {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.warn ('Searching for:', search);

    setSearch('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search.."
        style={styles.input}
      />
      { search &&  <Button color={'#000000'} title="Search" onPress={performSearch}/> }
      <FlatList
        scrollEnabled
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#5A5A5A",
    borderRadius: 5,
    padding: 10,
    color: "#fff",
  },
});
