import { Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons";

const FoodListItem = ({item}) => {
    return (
      <View
      style={{
        backgroundColor: "#5A5A5A",
        padding: 10,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      }}
    >
      <View style={{flex:1, gap: 5,}}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
          {item.label}
        </Text>
        <Text style={{ color: "#ccc" }}>{item.cal} cal, {item.brand}</Text>
      </View>
  
      <AntDesign name="pluscircleo" size={24} color="#191919" />
    </View>
    )
  }
  
  export default FoodListItem;