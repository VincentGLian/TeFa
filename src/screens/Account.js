import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={{ width:300, height:70, backgroundColor:'#304B3B', borderRadius:25, justifyContent:'center',
        alignSelf:'center', marginTop:100 }} onPress={()=>navigation.navigate("Sign Up")}>
        <Text style={{ fontSize:20, fontWeight:'500', color:'white', textAlign:'center' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width:300, height:70, backgroundColor:'#304B3B', borderRadius:25, justifyContent:'center',
        alignSelf:'center', marginTop:100 }} onPress={()=>navigation.navigate("Sign In")}>
        <Text style={{ fontSize:20, fontWeight:'500', color:'white', textAlign:'center' }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account