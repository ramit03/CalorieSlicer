import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TextInput, Button, ActivityIndicator } from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";
import {gql, useLazyQuery} from "@apollo/client";

const query = gql`
query search ($ingr:String) {
  search(ingr: $ingr) {
    text
    hints {
      food {
        brand
        foodId
        label
        nutrients {
          ENERC_KCAL
          FAT
          PROCNT
        }
      }
    }
  }
}`

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const[ runSearch,{data,loading,error}] = useLazyQuery(query)
  const performSearch = () => {
   runSearch({variables:{ingr:search}});
  }

  if(error) {
    console.log(error)
    return <Text>Failed to search </Text>
    
  }

  console.log(JSON.stringify(data,null,2))
  const items = data?.search?.hints || [];
  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search.."
        style={styles.input}
      />
      { search &&  <Button color={'#000000'} title="Search" onPress={performSearch}/> }
      {loading && <ActivityIndicator/>}
      <FlatList
        scrollEnabled
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => <Text>Search for food items</Text>}
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
