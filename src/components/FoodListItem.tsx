import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FoodListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
          {item.food.label}
        </Text>
        <Text style={{ color: "#ccc" }}>
          {item.food.nutrients.ENERC_KCAL} cal {item.food.brand}
        </Text>
        {/* <Text style={{ color: "#ccc" }}>
          {(
            item.food.nutrients.ENERC_KCAL -
            (4 * item.food.nutrients.PROCNT + 9 * item.food.nutrients.FAT)
          ).toFixed(1)}{" "}
          Gms C {item.food.nutrients.PROCNT} Gms P  {item.food.nutrients.FAT} Gms F  
        </Text> */}
      </View>
      <AntDesign name="pluscircleo" size={24} color="#191919" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5A5A5A",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FoodListItem;
