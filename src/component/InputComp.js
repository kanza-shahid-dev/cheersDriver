import React,{useState,useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-paper'
import styleSheet from '../assets/constants/styleSheet'

const InputComp = (props) => {
    const type=props.type;
    const secure=props.isPassword;
    const [passVisibility,setpassVisibility]=useState(true)
    const [EyeIcon,setEyeIcon]=useState(false)
   
    useEffect(()=>{
        if(props.isPassword)
        {
            setpassVisibility(true)
            setEyeIcon("eye")
        }
    },[])
   
    function togglePassword()
    {
        console.log(passVisibility)
        if(passVisibility==true)
        {
            setpassVisibility(false)
            setEyeIcon("eye")
        }
        else
        {
            setpassVisibility(true)
            setEyeIcon("eye-slash")
        }
    }
    return (
        <View style={{flex:1,width:'100%'}}>
      {
          type==="description-input"?
        <View style={{flexDirection:'row',height:160,justifyContent:'center',padding:3}}>
            <View style={{flex:1}}><TextInput multiline={true} keyboardType={props.keyboardType}  secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} style={{ paddingLeft:18,fontSize:16,fontWeight:'900'}}/></View>
        </View>
        : 
        <View style={{padding:3}}>
           
                {/** For password */}
            {props.isPassword?
            <TextInput onChangeText={props.onChangeText} keyboardType="default" multiline={false} secureTextEntry={passVisibility} label={props.label} right={<TextInput.Icon name={()=><TouchableOpacity onPress={()=>togglePassword()}><Icon name={EyeIcon} size={17} color={colors.primary} /></TouchableOpacity>}/>} style={{fontWeight:'bold'}} theme={{colors:{primary:'grey',text:'black',background:'transparent'}}} ></TextInput>
             :
            <TextInput keyboardType={props.keyboardType} onChangeText={props.onChangeText} label={props.label} right={<TextInput.Icon name={()=><Icon name={props.icon} size={17} color={colors.primary}/>}/>} style={{fontWeight:'bold'}} theme={{colors:{primary:'grey',text:'black',background:'transparent'}}} ></TextInput>
            }  
         
          
         {/** For error message */}
        <View style={{paddingLeft:5,marginTop:2}}> 
        {props.error?<Text style={styleSheet.error}>{props.error}</Text>:null}
        </View>
        </View>
    
    }
    </View>
    )
}

export default InputComp
