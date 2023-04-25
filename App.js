import { StatusBar } from "expo-status-bar";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import TaskLists from "./components/TaskLists";
import AddTask from "./components/AddTask";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "hello" },
    { id: 2, title: "hello2" },
  ]);
  const deleteHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((item) => item.id != id);
    });
  };
  const addHandler = (task) => {
    Keyboard.dismiss();
    return setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random(), title: task },
    ]);
  };
  return (
    <View style={{ position: "relative", flex: 1 }}>
      <Header />
      <TaskLists tasks={tasks} deleteHandler={deleteHandler} />
      <AddTask addHandler={addHandler} />
    </View>
  );
}
