import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to list Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to list Image"
        onPress={() => navigation.navigate("Image")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
