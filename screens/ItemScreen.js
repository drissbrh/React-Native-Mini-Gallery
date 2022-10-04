import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
const { height } = Dimensions.get("screen");
import { CircleButton } from "../components/Button";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: height / 1.7 }}>
    <Image
      source={{ uri: data.image }}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 5}
    />
  </View>
);

export default function ItemScreen({ navigation, route }) {
  const place = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: 25,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <Text>{place.details}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={place} navigation={navigation} />

            <View style={{ padding: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                {place.location}
              </Text>
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // detailsPageView: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 500,
  // },
});
