import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "black",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Cafe")}
          style={{ width: 45, height: 45, borderRadius: 150 }}
        >
          <Icon name="arrow-left" color="white" size={28} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{ width: 45, height: 45, borderRadius: 150 }}
        >
          <Image
            source={require("../assets/black.jpg")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 150 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 15 }}>
        <Text
          style={{
            fontSize: 18,
            color: "white",
          }}
        >
          Hello User 👋
        </Text>

        <Text
          style={{
            fontSize: 26,
            color: "white",
            marginTop: 26 / 2,
          }}
        >
          Let’s find masterpiece places
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View
          style={{
            width: "100%",
            borderRadius: 50,
            backgroundColor: "#ededed",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 25,
            paddingVertical: 15 - 2,
          }}
        >
          <Image
            source={require("../assets/search.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 20 }}
          />
          <TextInput
            placeholder="Search image"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
