import React from 'react';
import {Rating} from 'react-native-ratings';

export const Example = ({tintColor, imageSize, style, startingValue}) => {
  return (
    <Rating
      type="custom"
      readonly={true}
      fractions={1}
      startingValue={startingValue}
      ratingColor="#304B3B"
      ratingBackgroundColor='#E9E9E9'
      tintColor={tintColor}
      imageSize={imageSize}
      style={style}
    />
  );
};
