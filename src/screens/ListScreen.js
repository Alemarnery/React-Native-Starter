import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Fiend #1", age: 20, key: "1" },
    { name: "Fiend #2", age: 22, key: "2" },
    { name: "Fiend #3", age: 26, key: "3" },
    { name: "Fiend #4", age: 28, key: "4" },
    { name: "Fiend #5", age: 23, key: "5" },
    { name: "Fiend #6", age: 12, key: "6" },
    { name: "Fiend #7", age: 53, key: "7" },
    { name: "Fiend #8", age: 45, key: "8" },
    { name: "Fiend #9", age: 28, key: "9" },
    { name: "Fiend #10", age: 30, key: "10" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
