import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { assets,COLORS } from '../assets'
import Feather from 'react-native-vector-icons/Feather'

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor:'#E9E9E9', width:"100%", height:"100%" }}>
      <ScrollView>
        <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
          <Image source={assets.veco1} />
          <TouchableOpacity>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Store</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection:'row' }}>
            <Feather name='user' size={10} />
            <Text>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor:'yellow' }}>
            <Text>Cart</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={assets.screenshot} style={{  }}/>
        </View>
        <View style={{ height:250, flexDirection:'row', justifyContent:'center' }}>
          <Text style={{ fontSize:60, fontWeight:'700' }}>TRUSTED PARTNER</Text>
        </View>
        <View style={{ backgroundColor: '#181818', flexDirection:'row', justifyContent:'space-around' }}>
          <Image source={assets.visa}/>
          <Image source={assets.ifttt}/>
          <Image source={assets.amazon}/>
          <Image source={assets.stripe}/>
          <Image source={assets.bnb}/>
        </View>
        <View>
          <Text>Flash sale</Text>
        </View>
        <View>
          <Text>collection</Text>
        </View>
        <View>
          <Text>best seller</Text>
        </View>
        <View>
          <Text>Recommendation</Text>
        </View>
        <View>
          <View style={{ flexDirection:'row' }}>
            <View>
              <Text>shop</Text>
            </View>
            <View>
              <Text>help</Text>
            </View>
            <View>
              <Text>faqs</Text>
            </View>
            <View>
              <Text>social media</Text>
            </View>
            
          </View>
          <View style={{ flexDirection:'row' }}>
            <Image source={assets.veco}/>
            <Text>Copyright fitrah. All rights reserved</Text>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Home