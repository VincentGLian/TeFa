import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed'

const Payment = () => {
  const [check1, setCheck1] = React.useState(false);
  return (
    <SafeAreaView style={{ backgroundColor:"#E9E9E9" }}>
      <View style={{ justifyContent:'center', alignItems:'center' }}>
        <Text style={{ fontWeight:'800' }}>My shopping cart</Text>
      </View>
      <View>
        <CheckBox
          title={"fitrah_shop"}
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
      </View>
    </SafeAreaView>
  )
}

export default Payment