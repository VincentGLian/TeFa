import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, SIZES, SHADOWS} from '../../assets';

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 1,
        height: 1,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width: 27, height: 27}}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'green',
        border: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Mulai Sewa Mobil
      </Text>
    </TouchableOpacity>
  );
};
