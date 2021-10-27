import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/constants/colors';

const SearchBar = (props) => {
    return (
        <View style={{flexDirection:'row',marginTop:10,backgroundColor:colors.silver,justifyContent:'center',borderRadius:26}}>
            <View style={{justifyContent:'center',paddingLeft:15}}>
                <Icon name="search" size={18} color="grey"/>
            </View>
        <View style={{flex:1}}>
            <TextInput onChangeText={props.onChangeText} keyboardType={props.keyboardType} placeholder="Search" style={{ paddingLeft:18,fontSize:15}}/>
        </View>
      
    </View>
    )
}


const styles=StyleSheet.create({
    
    textInput:{
        height:65,
        fontSize:17,
        marginTop:5,
        marginBottom:5,
        backgroundColor:'transparent',
        borderBottomWidth:1,
        borderColor:'grey'
    }

})
export default SearchBar
