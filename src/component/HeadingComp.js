import React from 'react'
import { View, Text } from 'react-native'
import colors from '../assets/constants/colors'
import styleSheet from '../assets/constants/styleSheet'

const HeadingComp = (props) => {
    return (
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1,width:'100%',paddingLeft:2,alignItems:'flex-start',marginBottom:5}}>
        <Text style={[styleSheet.heading,{color:colors.darkGrey}]}>{props.title}</Text>
        </View>
        {props.right?
           props.right
          :null    
         }
        </View>
        

    )
}

export default HeadingComp
