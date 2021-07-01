import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import Text from "../text";
import { color, size } from "../../theme";
import { scrollInterpolator, animatedStyles } from "./animation";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 1.2);

const DATA = [
  "🍪Recherche",
  "🌲Inscription",
  "🍎Evaluation",
  "📱Messages & Appel",
];

const Index = () => {
  const render = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text weight="bolder" style={styles.itemLabel}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: -1 }}>
      <Carousel
        data={DATA}
        loop={true}
        renderItem={render}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(index) => {}}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    // marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: size.defaultRadius,
    backgroundColor: color.black,
  },
  itemLabel: {
    color: color.white,
    fontSize: 24,
  },
});

export default Index;
