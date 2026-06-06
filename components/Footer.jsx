import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
function Footer() {
  return (
    <View style={styles.footer}>
<Ionicons
  name="home-outline"
  size={30}
  color="white"
/>
      <MaterialIcons name="search" size={30} color="white" />
<Ionicons name="heart-outline" size={30} color="white" />
<Ionicons name="person-outline" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 70,
    backgroundColor: "#000",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: "#333",
  },
});

export default Footer;