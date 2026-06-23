import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Back"
        onPress={() => navigation.goBack()}//navigation.goBack() does not know screen names.
//         It simply goes back to the previous screen in the navigation stack.
      />
    </View>
  );
}