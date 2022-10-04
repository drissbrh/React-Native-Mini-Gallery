import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { CircleButton } from "../components/Button";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 430 }}>
    <Image
      source={{ uri: data.media }}
      resizeMode="contain"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 5}
    />
  </View>
);

export default function SneakerScreen({ navigation, route }) {
  const { place } = route.params;
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
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.8)",
          zIndex: 1,
        }}
      >
        <Text>{place.title}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={place} navigation={navigation} />

            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                {place.name}
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
