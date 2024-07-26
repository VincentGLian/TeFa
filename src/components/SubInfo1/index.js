import { View, Text, Image } from 'react-native'
import { SIZES, COLORS, assets } from '../../assets'
import { Example } from '../Rating'

export const CardTitle1 = ({title, titleSize, date, description}) => {
  return (
    <View>
      <Text style={{ fontSize:titleSize, color:COLORS.primary, fontWeight:'900' }}>{title}</Text>
      <Text style={{ fontSize:SIZES.font, color:COLORS.primary, fontWeight:'500', textAlign:'justify', marginVertical:10 }}>{description}</Text>
      <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
        <Text style={{ fontSize:SIZES.small, color:COLORS.gray, fontWeight:'700' }}>{date}</Text>
        <Example imageSize={22} startingValue={4.5} />
      </View>
      
    </View>
  )
}

export const SubInfo1 = () => {
    return (
      <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: 'space-between'
       }}>
      </View>
    )
}
  