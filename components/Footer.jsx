import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import MaterialIcons from "@react-native-vector-icons/material-icons";

function Footer({ onHomePress, onSearchPress }) {
  return (
    <View style={styles.footer}>
         <TouchableOpacity onPress={onHomePress}>
                <MaterialIcons name="home" size={30} color="white" />
         </TouchableOpacity>

     <TouchableOpacity onPress={onSearchPress}>
           <MaterialIcons name="search" size={30} color="white" />
         </TouchableOpacity>

      <TouchableOpacity>
          <MaterialIcons name="favorite" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
          <MaterialIcons name="person-outline" size={30} color="white" />
      </TouchableOpacity>
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
  },
});

export default Footer;