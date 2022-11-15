import { View, Text, Image } from 'react-native'
import { SIZES, COLORS, assets } from '../../assets'

export const CardTitle = ({title, titleSize, price}) => {
  return (
    <View>
      <Text style={{ fontSize:titleSize, color:COLORS.primary, fontWeight:'900' }}>{title}</Text>
      <Text style={{ fontSize:SIZES.font, color:COLORS.primary, fontWeight:'900' }}>{price}</Text>
    </View>
  )
}

export const SubInfo = () => {
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
  