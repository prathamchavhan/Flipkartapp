import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
  paddingVertical: 19,
    width: "100%",

  },
  title: {
    color: "white",
    fontSize: 15,
    alginItems: "flex-start",
  },
});

export default Header;