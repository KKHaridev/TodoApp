import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Pressable, View, Alert } from "react-native";

export default function Header({deleteAll}) {
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO APP</Text>
      <Pressable
        onPress={() =>
          Alert.alert("Delete All Todo", ``, [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: deleteAll,
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F58C9",
  },
  circular: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
