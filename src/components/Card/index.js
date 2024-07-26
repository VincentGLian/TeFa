import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SIZES, assets } from '../../assets'
import { SubInfo, CardTitle } from '../SubInfo'
import Feather from 'react-native-vector-icons/Feather'

const CardV = ({data}) => {
    const navigation = useNavigation();
    
  return (
    <View style={{ 
        borderRadius:SIZES.font,
        marginBottom:0,
        margin:SIZES.base,
        width:"40%",
     }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Detail", {data});
        }}>

            {console.log(data)}
        <View style={{ width:"100%", height:230 }}>
            <Image 
                source={data.image}
                resizeMode="cover"
                style={{ 
                    width:"100%",
                    height:"100%",
                    borderRadius:20
                 }}
            />
        </View>
        <SubInfo />

       
        <View style={{ width:"100%", padding:SIZES.font, marginTop:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
            <CardTitle 
                title={data.name} 
                price={data.price}
                titleSize={SIZES.large} />
            <TouchableOpacity style={{
                backgroundColor: '#FDDE67',
                borderRadius: 3,
                justifyContent: 'center',
                height: 30,
                width: 35,}} onPress={()=>navigation.navigate("Payment", {data})}>
                <Feather name='shopping-cart' size={25} style={{ alignSelf:'center' }}/>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default CardV