import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import Item from "./Item";

export default function TaskLists({ tasks, deleteHandler }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tasks}>
          {tasks?.map((item, index) => (
            <Item item={item} deleteHandler={deleteHandler} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    paddingBottom: 10,
  },
  tasks: {
    flexDirection: "column-reverse",
  },
});
