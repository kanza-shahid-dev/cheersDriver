import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/constants/colors';
import styleSheet from '../assets/constants/styleSheet';

const CircularInputComp = (props) => {

    return (
        <View style={{flexDirection:'row',marginTop:10,marginBottom:10,padding:4,backgroundColor:colors.silver,justifyContent:'center',borderRadius:26}}>
        <View style={{flex:1}}>
            {props.textAlignCenter?
            <TextInput onChangeText={props.onChangeText} keyboardType={props.keyboardType} placeholder={props.placeholder} style={{fontSize:15,textAlign:'center'}}/>
           :
           <TextInput onChangeText={props.onChangeText} keyboardType={props.keyboardType} placeholder={props.placeholder} style={{ paddingLeft:18,fontSize:15}}/>
            }

        {/** For error message */}
        <View style={{paddingLeft:5,marginTop:2}}> 
        {props.error?<Text style={styleSheet.error}>{props.error}</Text>:null}
        </View>
        </View>
      
    </View>
    )
}

export default CircularInputComp
