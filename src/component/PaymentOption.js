import React,{useState,useEffect} from 'react'
import { View, Text,Image } from 'react-native'
import colors from '../assets/constants/colors'
import { RadioButton } from 'react-native-paper';

const PaymentOption = (props) => {
 //   const [checked,setIsChecked]=useState(props.checked)
    const [checked, setChecked] = React.useState(props.checked);
    const [value, setvalue] = React.useState(props.value);

    useEffect(()=>{
        //setChecked(props.checked)
        console.log("c",checked)
    })
   
    function toggleCheck(value)
    { 
        console.log("->",checked)
        if(checked)
        {
            setChecked(false)
            setvalue(value)
        }
        else
        {setChecked(true)
        }
    }
    return (
        <View style={{flex:1,width:'100%',flexDirection:'row',padding:10,margin:8,borderRadius:10,alignItems:'center',backgroundColor:colors.silver}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                 {props.icon?
                 <Image source={props.icon} style={{marginLeft:10}}/>
                 :
                 null
                }
                 <Text style={{fontSize:13,color:colors.darkGrey,paddingLeft:15}}>{props.title}</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
            <RadioButton
         status={ checked === props.value ? 'checked' : 'unchecked' }
        value={value}
        color={colors.primary}
        uncheckedColor={colors.primary}
        onPress={() => toggleCheck()}
      /></View>
        </View>
    )
}

export default PaymentOption
