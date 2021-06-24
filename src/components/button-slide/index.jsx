import React from "react";
import Slider from "@react-native-community/slider";
import { color as palette, size } from "../../theme";

const Index = (props) => {
  const { step = 1, min = 0, max = 30, color, onChange, value  } = props;


  return (
    <Slider
      value={value}
      style={{ width: "100%", height: size.heightSlider }}
      step={step}
      onValueChange={onChange}
      minimumValue={min}
      maximumValue={max}
      thumbTintColor={color ?? palette.black}
      minimumTrackTintColor={color ?? palette.black}
      maximumTrackTintColor={palette.white}
    />
  );
};

export default Index;
