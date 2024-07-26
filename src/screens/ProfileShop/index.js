import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {CardData} from '../../components';
import CardV from '../../components/Card';
import ProfileHeader from '../../components/ProfileHeader';
import styles from './styles'

const ProfileShop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={<ProfileHeader />}
          data={CardData}
          renderItem={({item}) => <CardV data={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={{alignSelf: 'center'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileShop;
