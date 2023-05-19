import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Item from "./Item";

export default function TaskLists({ tasks, deleteHandler }) {
  return (
    <View style={styles.container}>
      <FlatList
      inverted
        style={styles.tasks}
        data={tasks}
        renderItem={({ item }) => (
          <Item item={item} deleteHandler={deleteHandler} />
        )}
        keyExtractor={(item) => item[0]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    paddingBottom: 10,
  },
  tasks: {
    display: "flex",
    flexDirection: "column-reverse",
  },
});
