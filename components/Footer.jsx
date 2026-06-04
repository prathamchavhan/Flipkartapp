import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
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

export default Footer;