import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",

        ...props,
      }}
      onPress={handlePress}
    >
      <Icon name="arrow-left" color="black" size={26} left={15} />
    </TouchableOpacity>
  );
};
