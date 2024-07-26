import { View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets } from '../assets'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor:"#FDDE67", height:"100%", width:"100%" }}>
      <StatusBar hidden />
        <View>
          <Image source={assets.veco} style={{ alignSelf:'center', marginTop:50 }}/>
        </View>
        <View style={{ zIndex:-1, position:'absolute', height:'100%', width:'100%' }}>
          <Image source={ assets.splash } style={{ width:'100%', height:'100%' }}/>
        </View>
        <View>
          <TouchableOpacity style={{ width:300, height:70, backgroundColor:'#304B3B', borderRadius:25, justifyContent:'center',
           alignSelf:'center', marginTop:600 }} onPress={()=>navigation.navigate("BotTab")}>
            <Text style={{ fontSize:20, fontWeight:'500', color:'white', textAlign:'center' }}>Shop Now</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Splash