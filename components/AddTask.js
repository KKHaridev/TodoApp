import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Item from "./Item";

export default function TaskLists({ addHandler }) {
  const [task, setTask] = useState("");

  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <TextInput
        style={styles.input}
        placeholder="New Task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        style={!task ? styles.addDis : styles.add}
        onPress={() => {
          if (task) {
            addHandler(task);
            setTask("");
          }
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    position: "relative",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  input: {
    borderWidth: 1,
    borderColor: "#7E78D2",
    height: 50,
    width: 245,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  addDis: {
    borderWidth: 1,
    borderColor: "grey",
    width: 40,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  add: {
    borderWidth: 1,
    borderColor: "#7E78D2",
    width: 40,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
