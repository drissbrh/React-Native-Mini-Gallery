import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, paddingVertical: 30 }}
      backgroundColor="white"
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={false}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.icon}
        >
          <Icon name="arrow-left" color="black" size={29} left={15} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.profileName}>My Profile</Text>
          <Image
            style={styles.profilePic}
            source={require("../assets/black.jpg")}
          />
          <Text style={styles.profileName}>Black Sinon</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Cafe")}
          >
            <Text style={{ color: "white" }}>Back to first screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    paddingHorizontal: 20,
  },
  profileHeading: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,
    color: "white",
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  profileName: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  nameInput: {
    borderColor: "black",
    padding: 15,
  },
  loginButton: {
    backgroundColor: "#121512",
    width: 205,
    height: 40,
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "white",
  },
});
