import { StatusBar } from "expo-status-bar";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import TaskLists from "./components/TaskLists";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [tasks, setTasks] = useState(null);

  let keys = [];
  const getAllKeys = async () => {
    try {
      keys = await AsyncStorage.getAllKeys();
      getMultiple(keys);
    } catch (e) {}
  };

  const getMultiple = async (keys) => {
    try {
      setTasks(await AsyncStorage.multiGet(keys));
    } catch (e) {}
  };

  useEffect(() => {
    getAllKeys();
  }, []);

  const deleteAll = async () => {
    try {
      await AsyncStorage.clear();
      getAllKeys();
    } catch (e) {}
  };

  const deleteHandler = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      getAllKeys();
    } catch (e) {}
  };

  const addHandler = async (value) => {
    try {
      await AsyncStorage.setItem(new Date().toLocaleString(), value);
      getAllKeys();
      Keyboard.dismiss();
    } catch (e) {}
  };

  return (
    <View style={{ position: "relative", flex: 1 }}>
      <Header deleteAll={deleteAll} />
      <TaskLists tasks={tasks} deleteHandler={deleteHandler} />
      <AddTask addHandler={addHandler} />
    </View>
  );
}
