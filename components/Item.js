import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Item({ item, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.list}>
      <View style={styles.todo}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item[1]}</Text>
        <Text>{item[0]}</Text>
      </View>
      <Pressable
        onPress={() =>
          Alert.alert("Delete Todo", `${item[1]}`, [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                deleteHandler(item[0]);
              },
            },
          ])
        }
        style={({ pressed }) => [
          {
            borderColor: pressed ? "#FE5F55" : "#7E78D2",
          },
          styles.circular,
        ]}
      ></Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#7E78D2",
    borderRadius: 15,
    flexDirection: "row",
  },
  circular: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
