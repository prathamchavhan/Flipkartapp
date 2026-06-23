import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Citypage from "../../components/cityplace";
import Cards from "../../components/cards";

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView>
        <Cards />

        <View style={{ marginTop: 20 }}>
          <Citypage />
        </View>
      </ScrollView>

      <Footer
        onHomePress={() => navigation.navigate("Main")}
        onSearchPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});