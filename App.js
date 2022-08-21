// How to Make a View Like Android Fragment in React Native
// https://aboutreact.com/android-fragment-view/

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from "react-native";


import Discussion from "./component/screen/Discussion";

const App = () => {

  return (<Discussion/>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 8,
  },
  comStyle: {
    margin: 24,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    padding: 7,
    color: "#550a8a",
  },
  paragraphStyle: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    padding: 2,
    margin: 2,
  },
  topStyle: {
    position: "absolute",
    height: "130px",
    width: "414px",
    left: "0px",
    top: "0px",
  },
});

export default App;