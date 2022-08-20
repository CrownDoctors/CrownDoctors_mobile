/* // How to Make a View Like Android Fragment in React Native
// https://aboutreact.com/android-fragment-view/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { Text, View, StyleSheet, Image } from "react-native";
import Searchbar from "../shared/SearchBar";

const Recent = () => {
/*   const [value, setValue] = useState(0);
  function updateSearch(value) {
    //your logic for search
    console.log(value);
    setValue(value);
  } 
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
    /*  <View style={styles.container}>
      
          <Text style={styles.paragraphStyle}>
             Content Loaded from RECENT
          </Text> 
         
    </View>  
    <View style={styles.container}>
      <Searchbar
        value={value}
        updateSearch={updateSearch}
        style={{}}
      ></Searchbar>
      {/*   /* inputStyle={{backgroundColor: 'white'}}
        containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
        placeholderTextColor={'#g5g5g5'}
        placeholder={'Pritish Vaidya'} }
    </View>
    /*  </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    //backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    //padding: 24,
  },
  copyContainer: {
    flex: 1,
    // backgroundColor: 'red', height: '100%', width: '100%'
  },
});

export default Recent
 */

// How to Make a View Like Android Fragment in React Native
// https://aboutreact.com/android-fragment-view/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Searchbar from "../shared/SearchBar";
import Adddiscussion from "../screen/AddDiscussion";

const Recent = () => {
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

      {/* <View style={styles.anotherContainer}>
        <Text style={styles.paragraphStyle}>Categories</Text>
      </View> */}


      <View style={styles.anotherContainer}>
        <View style={styles.items}>
          <Image
            style={styles.icPplImg}
            source={require("../../assets/Alice.png")}
          />
          <Text style={{ marginTop: "5%", marginLeft: "1%", marginRight: "30%" }}>Topic:: Add your.....</Text>
          <Image
            source={require("../../assets/btn.png")}
          />
        </View>
        <Text style={{ marginTop: "5%", marginBottom: "5%" }}>BIO:  Add your discussion to the community</Text>
        <View style={styles.items}>
          <Image
            source={require("../../assets/btn.png")}
          />
          <Text style={{ marginTop: "1.5%" }}>Upvotes</Text>
          <Image
            style={styles.itemsRight}
            source={require("../../assets/btn.png")}
          />
          <Text style={{ marginRight: "2%", marginTop: "1.5%" }}>Share</Text>
          <Image
            source={require("../../assets/btn.png")}
          />
          <Text style={{ marginRight: "2%", marginTop: "1.5%" }}>Replies</Text>
        </View>
      </View>

      <View style={styles.anotherContainer}>
        <View style={styles.items}>
          <Image
            style={styles.icPplImg}
            source={require("../../assets/Richard.png")}
          />
          <Text style={{ marginTop: "5%", marginLeft: "1%", marginRight: "30%" }}>Topic:: Add your.....</Text>
          <Image
            source={require("../../assets/btn.png")}
          />
        </View>
        <Text style={{ marginTop: "5%", marginBottom: "5%" }}>BIO:  Add your discussion to the community</Text>
        <View style={styles.items}>
          <Image
            source={require("../../assets/btn.png")}
          />
          <Text style={{ marginTop: "1.5%" }}>Upvotes</Text>
          <Image
            style={styles.itemsRight}
            source={require("../../assets/btn.png")}
          />
          <Text style={{ marginRight: "2%", marginTop: "1.5%" }}>Share</Text>
          <Image
            source={require("../../assets/btn.png")}
          />
          <Text style={{ marginRight: "2%", marginTop: "1.5%" }}>Replies</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        {/*To set the FirstScreen*/}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setIndex(1)}
        >
          <Text style={styles.discContainer}>Add your discussion to the community</Text>
          {/* <a href="AddDiscussion.js">Go to Profile</a>   */}
        </TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    marginTop: 15,
    //padding: 24,
  },
  anotherContainer: {
    backgroundColor: "#D3D3D3",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 4,
    marginVertical: 15,
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
  catContainer: {
    //backgroundColor: 'lightgreen',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
    margin: '8px 8px 8px 2px',
  },
  pplContainer: {
    width: "80%",
    //backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },
  icPplImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // padding: 0,
    // margin: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: "center",
    // alignItems: "center",
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: "space-between",
  },
  itemsRight: {
    marginLeft: "30%",
  },
  discContainer: {
    // margin: "5%",
    // padding:"4%",
    fontSize: 15,
    backgroundColor: "white",
    color: "#38049E",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 25,
    // width: '100%',
    marginVertical: 10,
  }
});

export default Recent