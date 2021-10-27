import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors'
import styleSheet from '../assets/constants/styleSheet';

const HeaderBanner = (props) => {
    return (
        <View style={{borderWidth:2,borderRadius:30,borderColor:colors.primary,padding:12}}>
            
        <View style={{flexDirection:'row'}}>
        {props.left?
        <View style={{flex:1}}>
            <Text style={[styleSheet.secHeading,{color:colors.darkGrey}]}>{props.left}</Text>
            <Text style={[styleSheet.heading,{color:colors.darkGrey}]}>{props.userName}</Text>
        </View>
        :
        <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1,alignItems:'flex-start'}}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
        <Icon name="arrow-back-ios" color={props.color} size={25}/>
        </TouchableOpacity>
        </View>
        </View>
        }
      
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1}}><Text style={{marginRight:20,fontSize:16}}>Current Location</Text></View>
                    <Icon name="keyboard-arrow-down" size={30} color={colors.primary}/>
                </View>
                </View>
       
       
    )
}

export default HeaderBanner
