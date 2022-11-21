import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {CardData} from '../../components';
import CardV from '../../components/Card';
import SearchHeader from '../../components/SearchHeader';
import styles from './styles';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={<SearchHeader />}
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

export default Search;
