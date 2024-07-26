import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CircleButton } from '../Button'
import { assets } from '../../assets'
import { Example } from '../Rating'
import { useNavigation } from '@react-navigation/native'

const ReviewHeader = () => {
    const [ isPress, setIsPress ] = React.useState("white");
    const [ isPress1, setIsPress1 ] = React.useState("white");
    const [ isPress2, setIsPress2 ] = React.useState("white");
    const [ isPress3, setIsPress3 ] = React.useState("white");
    const [ isPress4, setIsPress4 ] = React.useState("white");
    const [ isPress5, setIsPress5 ] = React.useState("white");
    const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#E9E9E9' }}>
      <CircleButton imgUrl={assets.back} left={25} top={35} handlePress={() => navigation.goBack()}/>
      <Text style={{ fontSize:23, fontWeight:'700', color:'black', width:300, alignSelf:'center', marginTop:18 }}>Customers review</Text>
      <View style={{ backgroundColor:'#D9D9D9', width:330, height:50, borderRadius:10, alignSelf:'center', marginVertical:20, flexDirection:'row', alignItems:'center' }}>
        <Example tintColor={'#D9D9D9'} imageSize={25} style={{marginVertical: 5, marginStart: 25, marginEnd: 5}} startingValue={4.5}/>
        <Text style={{ fontSize:15, fontWeight:'900' }}>4.9/5</Text>
        <Text style={{ fontSize:15, fontWeight:'900', marginLeft:50 }}>54 review</Text>
      </View>
      <View style={{ flexDirection:'row', justifyContent:'space-evenly', flex:1, flexWrap:'wrap', marginHorizontal:40}}>
        <TouchableOpacity style={{ borderRadius:30, marginVertical:5, backgroundColor:isPress, minWidth:80, minHeight:50, alignItems:'center', justifyContent:'center' }} onPress={() => isPress === "white" ? setIsPress("#FDDE67") : setIsPress("white")}>
          <Text style={{ fontSize:15, fontWeight:'700', color:'black', }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius:30, marginVertical:5, paddingHorizontal:15, backgroundColor:isPress1, minWidth:80, minHeight:50, alignItems:'center', justifyContent:'center', flexDirection:'row' }} onPress={() => isPress1 === "white" ? setIsPress1("#FDDE67") : setIsPress1("white")}>
          <Example imageSize={18} startingValue={5} tintColor={isPress1}/>
          <Text style={{ fontSize:15, fontWeight:'700', color:'black', marginLeft:5 }}>(50)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius:30, marginVertical:5, paddingHorizontal:15, backgroundColor:isPress2, minWidth:80, minHeight:50, alignItems:'center', justifyContent:'center', flexDirection:'row' }} onPress={() => isPress2 === "white" ? setIsPress2("#FDDE67") : setIsPress2("white")}>
          <Example imageSize={18} startingValue={4} tintColor={isPress2}/>
          <Text style={{ fontSize:15, fontWeight:'700', color:'black', marginLeft:5 }}>(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius:30, marginVertical:5, paddingHorizontal:15, backgroundColor:isPress3, minWidth:80, minHeight:50, alignItems:'center', justifyContent:'center', flexDirection:'row' }} onPress={() => isPress3 === "white" ? setIsPress3("#FDDE67") : setIsPress3("white")}>
          <Example imageSize={18} startingValue={3} tintColor={isPress3}/>
          <Text style={{ fontSize:15, fontWeight:'700', color:'black', marginLeft:5 }}>(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius:30, marginVertical:5, paddingHorizontal:15, backgroundColor:isPress4, minWidth:80, minHeight:50, alignItems:'center', justifyContent:'center', flexDirection:'row' }} onPress={() => isPress4 === "white" ? setIsPress4("#FDDE67") : setIsPress4("white")}>
          <Example imageSize={18} startingValue={2} tintColor={isPress4}/>
          <Text style={{ fontSize:15, fontWeight:'700', color:'black', marginLeft:5 }}>(1)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius:30, marginVertical:5, paddingHorizontal:15, backgroundColor:isPress5, minWidth:80, minHeight:50, alignItems:'center', justifyContent:'center', flexDirection:'row' }} onPress={() => isPress5 === "white" ? setIsPress5("#FDDE67") : setIsPress5("white")}>
          <Example imageSize={18} startingValue={1} tintColor={isPress5}/>
          <Text style={{ fontSize:15, fontWeight:'700', color:'black', marginLeft:5 }}>(1)</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ReviewHeader