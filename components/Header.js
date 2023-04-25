import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    padding: 20,
    justifyContent:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#6F58C9",
  },
});
