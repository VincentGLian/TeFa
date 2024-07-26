import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { CircleButton } from '../../components/Button'
import { assets } from '../../assets'
import styles from './styles'
import { Example } from '../../components/Rating'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Detail = ({route, navigation}) => {
    const datadetail = route.params.data;
    
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ flex:1 }}>
            <ImageBackground source={datadetail.image} style={{ height:450 }}>
                <CircleButton imgUrl={assets.back} left={25} top={30} handlePress={() => navigation.goBack()}/>
                <TouchableOpacity style={styles.cartb} onPress={()=>navigation.navigate("Payment")}>
                    <Feather name='shopping-cart' size={25} style={{ alignSelf:'center' }}/>
                    <Text style={styles.cartt}>Cart: 2</Text>
                </TouchableOpacity>
                <View style={styles.page}>
                    <Text style={{ alignSelf:'center' }}>1/5</Text>
                </View>
            </ImageBackground>
            <View style={styles.title}>
                <Text style={styles.titlet}>{datadetail.name}</Text>
                <TouchableOpacity style={styles.titleb}>
                    <Text style={{ alignSelf:'center' }}>Pre Order</Text>
                    <Feather name='clock' size={17} style={{ alignSelf:'center' }}/>
                </TouchableOpacity>
            </View>
            <View style={styles.cr}>
                <Text style={styles.c1}>{datadetail.price}</Text>
                <Text style={styles.c2}>{datadetail.price}</Text>
                <Example tintColor={'#E9E9E9'} imageSize={28} style={styles.re} startingValue={4.9}/>
                <Text style={styles.rt} onPress={()=>navigation.navigate("Review")}>4.9/5</Text>
            </View>
        </View>

        <View style={styles.v1}>
            <View style={styles.v2}>
                <TouchableOpacity onPress={()=>navigation.navigate("Profile Shop")}>
                    <Image source={assets.toko} style={styles.imtk} />
                </TouchableOpacity>
                
                <View style={{ marginLeft:20 }}>
                    <Text style={styles.imt}>fitrah shop</Text>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity style={styles.imb1}>
                            <Text style={styles.imt1}>Go to shop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imb2}>
                            <Text style={styles.imt1}>Chat now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

        <View style={{ backgroundColor:'white', marginTop:10 }}>
            <Text style={styles.des}>Description:</Text>
        </View>

        <View style={{ backgroundColor:'white', marginTop:2 }}>
            <View style={styles.des1}>
                <Text style={styles.dest}>Country</Text>
                <Text style={styles.dest1}>Padang</Text>
            </View>
            <View style={styles.des2}>
                <Text style={styles.dest}>Brand</Text>
                <Text style={styles.dest2}>Louis Vuitton</Text>
            </View>
            <View style={styles.des2}>
                <Text style={styles.dest}>Category</Text>
                <Text style={styles.dest3}>Suit</Text>
            </View>
            <View style={styles.des2}>
                <Text style={styles.dest}>Weight</Text>
                <Text style={styles.dest4}>250gr</Text>
            </View>
        </View>

        <View style={styles.v3}>
            <Text style={styles.vt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        </View>

        <View style={styles.bot}>
            <TouchableOpacity style={styles.botb}>
                <Ionicons name='home-outline' size={25} style={{ alignSelf:'center' }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botb}>
                <Ionicons name='chatbox-ellipses-outline' size={25} style={{ alignSelf:'center' }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botbg}>
                <Text style={styles.botbgt}>Add to cart</Text>
            </TouchableOpacity>
        </View>
        
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default Detail