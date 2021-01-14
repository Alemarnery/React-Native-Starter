import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        score={12}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Beach"
        score={10}
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Mountain"
        score={9}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
