import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, SIZES, SHADOWS} from '../../assets';
import React, {FC, useState} from 'react';
import {Icon} from '@rneui/themed';

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

interface Props {
  label: string;
}

export const Dropdown: FC<Props> = ({label}) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={{
            position: 'absolute',
            backgroundColor: '#304B3B',
            top: 40,
            borderRadius:5,
            borderTopLeftRadius:0,
            borderTopRightRadius:0
          }}>
          <TouchableOpacity style={{ height:34, width:180 }}>
            <Text style={{ color:'white', textDecorationLine:'underline', marginTop:5, marginLeft:20 }}>Relevancy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:34, width:180 }}>
            <Text style={{ color:'white', textDecorationLine:'underline', marginTop:5, marginLeft:20 }}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:34, width:180 }}>
            <Text style={{ color:'white', textDecorationLine:'underline', marginTop:5, marginLeft:20 }}>Price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:34, width:180 }}>
            <Text style={{ color:'white', textDecorationLine:'underline', marginTop:5, marginLeft:20 }}>Date</Text>
          </TouchableOpacity>
        </View>
        
      );
    }
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: 180,
        height: 40,
        backgroundColor: '#304B3B',
        padding: 10,
        zIndex: 1,
        borderRadius: 5,
      }}
      onPress={toggleDropdown}>
      {renderDropdown()}
      <Text
        style={{flex: 1, paddingLeft: 15, paddingRight: 40, color: 'white'}}>
        {label}
      </Text>
      <Icon type="entypo" name="chevron-small-down" color={'white'} />
    </TouchableOpacity>
  );
};
