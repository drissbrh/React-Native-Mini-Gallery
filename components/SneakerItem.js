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

const { width } = Dimensions.get("screen");

export const SneakerItem = ({ sneaker }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("SneakerDetails", sneaker)}
    >
      <ImageBackground
        resizeMode="contain"
        style={style.cardImage}
        source={{ uri: sneaker.media }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {sneaker.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 320,
    width: width / 1.5,
    marginRight: 20,
    padding: 10,

    overflow: "hidden",
    borderRadius: 10,
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
