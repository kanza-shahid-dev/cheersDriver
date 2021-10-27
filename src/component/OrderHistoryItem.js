import React from 'react'
import { View, Text ,Image} from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../assets/constants/colors';

const OrderHistoryItem = (props) => {
    return (
        <View style={{width:'100%',padding:8,paddingLeft:12,paddingRight:10,marginBottom:10,marginTop:10,marginRight:10,flexDirection:'row',borderWidth:1,borderRadius:20,borderColor:'grey'}}>
            <View style={{flex:1,justifyContent:'center'}}>
            <Text style={[styleSheet.thirdHeading,{marginBottom:10,color:colors.darkGrey,fontWeight:'bold'}]}>
                Order No:
            </Text>
            <Text style={{fontSize:18,color:'grey',fontWeight:'700'}}>
                Subtotal
            </Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
            <Text style={[styleSheet.thirdHeading,{color:colors.black}]}>
                #123456
            </Text>
            {props.unread?
                <View style={{justifyContent:'center',alignItems:'flex-end'}}>
                    <Icon name="primitive-dot" color="red" size={20} />
                </View>
                :
                <View style={{marginBottom:5}}>
                </View>
                }
            <Text style={{fontSize:18,color:'grey',fontWeight:'700'}}>
                R 300
            </Text>
            </View>
            
        </View>
    )
}

export default OrderHistoryItem
