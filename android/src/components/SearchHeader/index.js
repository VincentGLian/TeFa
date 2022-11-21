import React from 'react';
import {View, Text} from 'react-native';
import {CircleButton, Dropdown} from '../Button';
import {assets} from '../../assets';
import {Button, SearchBar} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

class SearchHeader extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    const { navigation } = this.props;
    return (
      <View style={{backgroundColor: '#E9E9E9'}}>
        <CircleButton imgUrl={assets.back} left={25} top={35} handlePress={() => navigation.goBack()} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            platform={'android'}
            containerStyle={{
              width: 240,
              height: 40,
              borderRadius: 10,
              justifyContent: 'center',
              marginTop: 15,
              marginLeft: 50,
            }}
            inputStyle={{fontSize: 15}}
          />
          <Button
            color={'white'}
            titleStyle={{color: 'black'}}
            title={'Filter (2)'}
            buttonStyle={{
              width: 90,
              height: 40,
              borderRadius: 10,
              marginTop: 15,
              marginRight: 15,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 25,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              color: 'gray',
              marginTop: 10,
            }}>
            Sort by
          </Text>
          <Dropdown label="Relevancy" />
        </View>
      </View>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <SearchHeader {...props} navigation={navigation} />;
}