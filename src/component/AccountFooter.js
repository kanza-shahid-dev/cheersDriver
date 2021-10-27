import React,{useState,useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../assets/constants/colors'

const AccountFooter = (props) => {
    const[isLoginScreen,setisLoginScreen]=useState(props.isLoginScreen)

    useEffect(()=>{
        console.log(props.isLoginScreen)
    })
    return (
        <View style={{padding:20, backgroundColor:colors.primary}}>
           <TouchableOpacity onPress={props.onPress}> 
           {isLoginScreen?
           <Text style={{color:'white'}}>Don`t have an account? Register now</Text>
            :
           <Text style={{color:'white'}}>Already have an account? Login now</Text>
           }
           </TouchableOpacity>
           </View>
    )
}

export default AccountFooter
