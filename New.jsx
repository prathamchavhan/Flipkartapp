import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
   Dimensions,
} from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Citypage from "./components/cityplace"
import Cards from "./components/cards"
const { width, height } = Dimensions.get("window");
function New() {

  return (
    <SafeAreaView style={styles.container}>

        <Header/>
        <ScrollView>
        <Cards/>

<View style={{ marginTop: 20 }}>
    <Citypage />
  </View>

           </ScrollView>
      <Footer/>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{flex:1}
    });


export default New;