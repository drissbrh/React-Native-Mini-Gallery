import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CafeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
        }}
      >
        <View style={style.details}>
          <Text style={{ color: "white", fontSize: 35, fontWeight: "bold" }}>
            Discover
          </Text>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
            You're about to see new adventures
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  details: {
    position: "absolute",
    height: "30%",
    bottom: 0,
    width: "100%",
    flexDirection: "column",

    alignItems: "center",
    paddingHorizontal: 40,
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
});

export default CafeScreen;
