import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Item } from "../components/Item";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import places from "../const/places";
import axios from "axios";
import HomeHeader from "../components/HomeHeader";

export default function Home({ navigation }) {
  const [placesData, setPlacesData] = useState(places);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setPlacesData(placesData);
    }

    const filteredData = placesData.filter((item) =>
      item.location.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setPlacesData(places);
    } else {
      setPlacesData(filteredData);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={false}
      />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            ListEmptyComponent={<Text>Nothing is here</Text>}
            data={placesData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            renderItem={({ item }) => (
              <View>
                <Item place={item} />
              </View>
            )}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 400, backgroundColor: "black" }} />
          <View style={{ flex: 1, backgroundColor: "white" }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: "black",
    color: "white",
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 250,
    alignSelf: "flex-end",
  },

  headphoneSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 25,
    paddingHorizontal: 20,
  },
  h2: {
    fontWeight: "normal",
    color: "#efefef",
    fontSize: 18,
    padding: 15,
  },
  h3: {
    fontWeight: "500",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  showAllLink: {
    fontWeight: "normal",
    color: "#4361ee",
    fontSize: 19,
    padding: 12,
  },
  paragraph: {
    fontWeight: "bold",
    padding: 10,
  },
});
