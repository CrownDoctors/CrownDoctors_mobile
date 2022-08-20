import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function Searchbar({ value, updateSearch, style }) {
  const [query, setQuery] = useState();

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.vwSearch}>
            <Image
              style={styles.icSearch}
              source={require("../../assets/ic_search.png")}
            />
          </View>
          {/* <TextInput style={styles.textInput} /> */}
          <TextInput
          value={query}
          placeholder="  Search for category or people"
          style={styles.textInput}
          onChangeText={(text) => {
            setQuery(text)
            updateSearch(text)
          }}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

  textInput: {
    //backgroundColor: "green",
    flex: 1,
  },
  vwSearch: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    //width: 40,
    //backgroundColor: "red",
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    width: "95%",
    height: 30,
    borderWidth: 0.3, 
    flexDirection: "row-reverse",
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderRadius: 20,
  },
  container: {
    //height: 50,
    alignItems: "center",
    borderRadius: 20,
    //backgroundColor: "blue",
  },
});
