import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import {CardData} from '../../components';
import CardV from '../../components/Card';
import HomeHeader from '../../components/HomeHeader';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor:'#E9E9E9', width:"100%", height:"100%" }}>
      <View>
        <FlatList
          ListHeaderComponent={<HomeHeader />}
          data={CardData}
          renderItem={({item}) => <CardV data={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent:'space-evenly' }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home