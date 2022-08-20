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

import Recent from "../screen/Recent";
import Trending from "../screen/Trending";
//import Searchbar from "../shared/SearchBar";


LogBox.ignoreAllLogs(); //Ignore all log notifications

const Discussion = () => { 

  const [index, setIndex] = useState(1);
  const [value, setValue] = useState(2);
  function updateSearch(value) {
    //logic comes here
  }

  const RenderElement = () => {
    //You can add N number of Views here in if-else condition
    if (index === 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <Recent />;
    } else {
      //Return the second Screen as a child to set in Parent View
      return <Trending />;
    }
  };

  return ( //doesnt work on recent page 
    <SafeAreaView style={{ flex: 0.38 }}> 
      <View style={styles.container}>
        <View
          style={{
           height: 110, 
            margin: 19,
            backgroundColor: "#FFFFFFF",
          }}
        >
          <View style={styles.container}>

            <Text style={styles.comStyle}>Community Forums</Text>
         
          </View>
        

        <View style={{ flexDirection: "row" }}>
          {/*To set the FirstScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}
          >
          <Text style={{ color: "#20c6b6" }}>Recent</Text>
          </TouchableOpacity>

          {/*To set the SecondScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(2)}
          >
            <Text style={{ color: "#20c6b6" }}>Trending</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={{ backgroundColor: "#ffffff" }}>
          <RenderElement />
        </View>
      </View>
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 2,
 
  },
  comStyle: {
    margin: 1,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
    color: "#38049E",
    fontFamily: 'Inter',
  },
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: "#808080",
    padding: 2,
    margin: 10,
    borderWidth: 0.5, 
    shadowColor: 'green', //no effect
     /* borderBottomColor: 'black',
     borderTopColor: 'black', */
    borderRadius: 10,
    //textDecorationLine: 'underline',
  },
});

export default Discussion;