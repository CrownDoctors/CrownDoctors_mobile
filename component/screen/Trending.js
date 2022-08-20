// How to Make a View Like Android Fragment in React Native
// https://aboutreact.com/android-fragment-view/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Searchbar from "../shared/SearchBar";
import Adddiscussion from "../screen/AddDiscussion";

const Trending = () => {
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(1);
  function updateSearch(value) {
    //your logic for search
    console.log(value);
    setValue(value);
  }
  const RenderElement = () => {
    //You can add N number of Views here in if-else condition
    if (index === 1) {
      //Go to Add discussion
      return <Adddiscussion />;
    } 
  };
  return (
    <View style={styles.container}>
      <Searchbar
        value={value}
        updateSearch={updateSearch}
        style={{ marginTop: "8%" }}
      ></Searchbar>
      <View style={styles.anotherContainer}>
        <Text style={styles.paragraphStyle}>Categories</Text>
      </View>
      <View style={styles.catContainer}>
          <Image
            style={styles.icImg}
            source={require("../../assets/scalp.png")}
          />
          <Image
            style={styles.icImg}
            source={require("../../assets/hand.png")}
          />
          <Image
            style={styles.icImg}
            source={require("../../assets/hair.png")}
          />
          <Image
            style={styles.icImg}
            source={require("../../assets/gym.png")}
          />
      </View>
      <View style={styles.anotherContainer}>
        <Text style={styles.paragraphStyle}>People</Text>
      </View>
      <View style={styles.pplContainer}>
          <Image
            style={styles.icPplImg}
            source={require("../../assets/Richard.png")}
          />
          <Image
            style={styles.icPplImg}
            source={require("../../assets/Alice.png")}
          />
      </View>
      <View style={{ flexDirection: "row" }}>
          {/*To set the FirstScreen*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setIndex(1)}
          >
          <Text style={{ color: "#38049E" }}>Add your discussion to the community</Text>
          </TouchableOpacity>
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "pink",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    //padding: 24,
  },
  anotherContainer: {
    //backgroundColor: "red",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 4,
    margin: 4, 
    width: "100%",
  },
  paragraphStyle: {
    margin: 4,
    marginTop: 0,
    fontSize: 16,
    //fontWeight: "bold",
    textAlign: "right",
    color: "#38049E",
    fontFamily: 'Inter',

  
  },
  icImg: {
    height: 80,
    width: 120,
    borderRadius: 20,
    padding: 2,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  vwImg: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    //width: 40,
    //backgroundColor: "red",
  },
  vwImg2: {
    //flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  catContainer: {
    //backgroundColor: 'lightgreen',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
    margin: 8,
  },
  pplContainer: {
    width:"80%",
    //backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },
  icPplImg: {
    height: 80,
    width: 80,
    borderRadius: 50,
    padding: 2,
    margin: 30,
    //justifyContent: "center",
    alignItems: "center",
  },
});

export default Trending;
