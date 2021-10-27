import React,{useState,useEffect} from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors';

const WishListItem = (props) => {
 
    return (
        <View style={{width:'100%',margin:1,flexDirection:'row',borderWidth:0.5,borderRadius:20,borderColor:colors.borderColor}}>
        <View style={{alignItems:'center'}}>
        <Image source={require('../assets/images/bottle.png')} style={{height:130,width:80,margin:10,resizeMode:'contain'}}/>
        </View>
        <View style={{flex:1,justifyContent:'center',paddingTop:5,paddingLeft:5}}>
        <View><Text style={[styleSheet.thirdHeading,{color:colors.darkGrey}]}>
            {props.title}
        </Text>
        </View>
        <Text style={[styleSheet.thirdHeading,{color:colors.darkGrey}]}>
            R {props.price}
        </Text>
        </View>
        <View style={{justifyContent:'center',padding:19,alignItems:'flex-end'}}>
            <TouchableOpacity onPress={props.removeItem}>
            <Image source={require('../assets/icons/delete.png')}/>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default WishListItem
