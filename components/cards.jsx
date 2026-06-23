import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
   Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
function Cards() {
  const categories = [
    { id: 1, name: "Sports", color: "red" },
    { id: 2, name: "Music", color: "blue" },
    { id: 3, name: "Movies", color: "green" },
    { id: 4, name: "Travel", color: "orange" },
    { id: 5, name: "Food", color: "purple" },
    { id: 6, name: "Books", color: "pink" },
    { id: 7, name: "Games", color: "teal" },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>Flat Cards</Text>
<View style={{ height: 150 }}>
<ScrollView
  horizontal={true}
>
        {categories.map((item) => {
          return (
            <View
              key={item.id}
              style={[
                styles.box,
                { backgroundColor: item.color },
              ]}
            >
              <Text style={styles.boxText}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      </View>

      <Text style={styles.ecards}>Elevated Cards</Text>
       <ScrollView horizontal={true}>
             <View style={[styles.box, { backgroundColor: "white" }]}>
        <Text style={[styles.boxText, { color: "black" }]}>
            Sports
        </Text>
           </View>

             <View style={[styles.box, { backgroundColor: "blue",color:"black" }]}>
               <Text style={styles.boxText}>Music</Text>
             </View>

             <View style={[styles.box, { backgroundColor: "green" }]}>
               <Text style={styles.boxText}>Movies</Text>
             </View>

             <View style={[styles.box, { backgroundColor: "orange" }]}>
               <Text style={styles.boxText}>Travel</Text>
             </View>

             <View style={[styles.box, { backgroundColor: "purple" }]}>
               <Text style={styles.boxText}>Food</Text>
             </View>

             <View style={[styles.box, { backgroundColor: "pink" }]}>
               <Text style={styles.boxText}>Books</Text>
             </View>

             <View style={[styles.box, { backgroundColor: "teal" }]}>
               <Text style={styles.boxText}>Games</Text>
             </View>

           </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",

    color: "white",

      paddingTop: height * 0.02,
     paddingLeft: width * 0.04,
  },
ecards:{
   fontSize: 25,
    fontWeight: "bold",
    marginBottom: 3,
    color: "white",


  },
  box: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

  },

  boxText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cards;