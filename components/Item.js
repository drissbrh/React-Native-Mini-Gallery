import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");

export const Item = ({ place }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Details", place)}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ImageBackground style={style.cardImage} source={{ uri: place.image }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="place" size={20} color={"white"} />
            <Text style={{ marginLeft: 5, color: "white" }}>
              {place.location}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={20} color={"white"} />
            <Text style={{ marginLeft: 5, color: "white" }}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardImage: {
    height: 420,
    width: width / 1.2,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
