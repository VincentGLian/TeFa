import { View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import {RevData} from '../../components';
import CardR from '../../components/Card1';
import ReviewHeader from '../../components/ReviewHeader';
import styles from './styles';

const Review = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={<ReviewHeader />}
          data={RevData}
          renderItem={({item}) => <CardR data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={{alignSelf: 'center'}}
        />
      </View>
    </SafeAreaView>
  )
}

export default Review