import React from "react";
import {View, StyleSheet,Text,ScrollView,Dimensions,Image, SafeAreaView,} from 'react-native';

function Citypage(){
    return(
    <SafeAreaView>

        <View style={styles.container}>
       <Image
source={require("../assests/manali.png")}
         style={styles.image}
         />
            </View>

            </SafeAreaView>
            );
    }

const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
      borderRadius: 10,
    width: 320,
    height: 450,
  },

});

export default Citypage;