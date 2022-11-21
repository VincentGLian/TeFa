import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {CardData} from '../../components';
import CardV from '../../components/Card';
import ProfileHeader1 from '../../components/ProfileHeader1';
import styles from './styles'

const ProfileProduct = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={<ProfileHeader1 />}
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

export default ProfileProduct;
