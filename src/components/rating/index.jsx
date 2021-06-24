import React from "react";
import { AirbnbRating as Rating } from "react-native-ratings";
import { color } from "../../theme";

const Index = (props) => {
  const {
    isDisabled = false,
    value = 0,
    size = 32,
    onChange = () => null,
  } = props;
  return (
    <Rating
      onFinishRating={onChange}
      isDisabled={isDisabled}
      showRating={false}
      defaultRating={value}
      size={size}
      selectedColor={color.yellow}
      unSelectedColor={color.white}
    />
  );
};

export default Index;
