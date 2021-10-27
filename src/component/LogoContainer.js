import React from 'react'
import { View, Text,Image } from 'react-native'

const LogoContainer = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Image source={require('../assets/images/logo.png')} style={{height:200,width:200}}/>
        </View>
    )
}

export default LogoContainer
