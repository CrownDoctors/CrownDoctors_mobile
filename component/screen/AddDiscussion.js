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

import Trending from "../screen/Trending";

const AddDiscussion = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        <View style={{ height: '20%', backgroundColor: "#3F569C", borderRadius: 10, }}>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <View style={{ flexDirection: "row" }}>
          {/*To set the FirstScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}
          >
          <Text style={{ color: "black" }}>Post your discussion</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttonStyle: {
      flex: 1,
      alignItems: "center",
      //backgroundColor: "#808080",
      padding: 2,
      margin: 10,
      borderWidth: 1, //no effect
      // shadowColor: 'white', //no effect
       borderBottomColor: 'black',
       borderTopColor: 'black',
       borderRadius: 10,
      //textDecorationLine: 'underline',
    },
  });
  
  export default AddDiscussion;