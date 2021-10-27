import React from 'react'
import { View, Text ,Image} from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../assets/constants/colors';

const NotificationItem = (props) => {
    return (
        <View style={{width:'100%',padding:10,paddingLeft:12,paddingRight:12,marginBottom:10,marginTop:10,marginRight:10,borderWidth:1,borderRadius:20,borderColor:'grey'}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}><Text style={[styleSheet.thirdHeading,{marginBottom:10,color:colors.darkGrey,fontWeight:'bold'}]}>
                    You Have A New Order No:#13123 Delievery
                </Text>
                </View>
                {props.unread?
                <View style={{justifyContent:'center'}}>
                    <Icon name="primitive-dot" color="red" size={20} />
                </View>
                :
                null
                }
           
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}><Text style={{fontSize:18,color:'grey',fontWeight:'700'}}>
                    Subtotal
                </Text>
                </View>
                <Text style={[styleSheet.thirdHeading]}>
                   R 300
                </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}><Text style={{fontSize:18,color:colors.primary,fontWeight:'500'}}>
                    Date
                </Text>
                </View>
                <Text style={[styleSheet.thirdHeading,{color:colors.primary,fontWeight:'500'}]}>
                    01-Sep-2021
                </Text>
            </View>
           
            
        </View>
    )
}

export default NotificationItem
