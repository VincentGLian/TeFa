import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SubInfo1, CardTitle1 } from '../SubInfo1'

const CardR = ({data}) => {
    const navigation = useNavigation();
  return (
    <View style={{ 
        borderRadius:10,
        width:"80%",
        marginTop:10,
        marginHorizontal:40,
        backgroundColor:'white'
     }}>
        <SubInfo1 />
        <View style={{ padding:20, marginTop:20, alignItems:'center' }}>
            <CardTitle1
                title={data.name} 
                date={data.date}
                titleSize={18}
                description={data.description} />
        </View>
    </View>
  )
}

export default CardR