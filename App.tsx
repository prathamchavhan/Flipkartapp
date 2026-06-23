// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   ScrollView,
//   StyleSheet,
// } from "react-native";
//
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Citypage from "./components/cityplace";
// import Cards from "./components/cards";
// import Home from "./src/Screens/Home";
//
// function App() {
//   const [screen, setScreen] = useState("main");
//
//
// if (screen === "home") {
//   return <Home onBack={() => setScreen("main")} />;
// }
//
//
//   return (
//     <SafeAreaView style={styles.container}>
//       <Header />
//
//       <ScrollView>
//         <Cards />
//
//         <View style={{ marginTop: 20 }}>
//           <Citypage />
//         </View>
//       </ScrollView>
//
//        <Footer
//              onHomePress={() => setScreen("main")}
//              onSearchPress={() => setScreen("home")}
//            />
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
//
// export default App;






import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./src/Screens/MainScreen";
import Home from "./src/Screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}