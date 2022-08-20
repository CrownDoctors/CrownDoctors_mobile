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


/* import Recent from "./component/screen/Recent";
import Trending from "./component/screen/Trending"; */
import Discussion from "./component/screen/Discussion";

/* LogBox.ignoreAllLogs();  *///Ignore all log notifications

const App = () => {

  return (<Discussion/>
  )
 /*  const [index, setIndex] = useState(1);

  const RenderElement = () => {
    //You can add N number of Views here in if-else condition
    if (index === 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <Recent />;
    } else {
      //Return the second Screen as a child to set in Parent View
      return <Trending />;
    }
  }; */

  /* return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            height: "25%",
            backgroundColor: "#FFFFFFF",
          }}
        >
          <View style={styles.container}>
            <Text style={styles.comStyle}>Community Forums</Text>
           {/*  <Image
              resizeMode="center"
              source={require("./assets/community.png")}
            /> }
          </View> */
        
/* 
        <View style={{ flexDirection: "row" }}>
          {/*To set the FirstScreen}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}
          >
            <Text style={{ color: "#20c6b6" }}>Recent</Text>
          </TouchableOpacity> */

          {/*To set the SecondScreen*/}
         /*  <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(2)}
          >
            <Text style={{ color: "#20c6b6" }}>Trending</Text>
          </TouchableOpacity>
        </View>
      </View> */

      {/* Text From Parent Screen}
        <Text style={styles.paragraphStyle}>
          Example of view like fragment in React Native
        </Text> */}

        {/*View to hold the child screens 
        which can be changed on the click of a button*/}
       /*  <View style={{ backgroundColor: "#ffffff" }}>
          <RenderElement />
        </View>
      </View>
    </SafeAreaView>
  ); */
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
    /* backgroundColor: "#808080", */
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