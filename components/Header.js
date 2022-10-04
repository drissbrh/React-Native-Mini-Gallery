import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkslateblue",
    height: 80,

    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
  },
});

export default Header;
