import React from "react";
import Carousel from "react-native-snap-carousel";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default HomeCarousel = ({ data }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: 110, height: 110 }}>
        <Image
          style={{ width: 110, height: 110, borderRadius: 400 }}
          source={item.path}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <Carousel
        layout={"default"}
        ref={(c) => {
          this._carousel = c;
        }}
        data={data}
        renderItem={renderItem}
        sliderWidth={wp(90)}
        itemWidth={120}
        loop={true}
        inactiveSlideShift={0}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
      />
    </View>
  );
};