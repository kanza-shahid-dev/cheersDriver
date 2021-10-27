import React,{useState} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import colors from '../assets//constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import AccountFooter from '../component/AccountFooter'
import LogoContainer from '../component/LogoContainer'


const Login = (props) => {
  const [emailError,setEmailError]=useState(null)
  const [passwordError,setpasswordError]=useState(null)

  function validateEmail(value)
  {
    if(value.length==0)
       setEmailError("Email required")
    else if(!(value.includes("@") && value.includes(".com")))
      setEmailError("Invalid Email")
    else
    setEmailError(null)
  }
  function validatePassword(value)
  {
    if(value.length==0)
    setpasswordError("Password required")
    else
    setpasswordError(null)
  }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={{flex:1,backgroundColor:colors.primary,padding:20,alignItems:'center'}}>
            
            <LogoContainer/>
            <View style={{width:'100%',backgroundColor:'white',borderRadius:10,padding:20,alignItems:'center'}}>
            <Text style={styleSheet.heading}>Hello</Text>
            <Text style={{color:'grey',fontSize:17}}>Please login to your account</Text>

            <InputComp label="Email Address" icon="envelope" keyboardType="email-address" error={emailError} onChangeText={(value)=>validateEmail(value)}/>

            <InputComp label="Password" secureTextEntry={true} isPassword={true} icon="eye" error={passwordError} onChangeText={(value)=>validatePassword(value)}/>

            <View style={{marginBottom:30,width:'100%',alignItems:'flex-end'}}>
              <Text style={{color:colors.primary}}>Forgot Password?</Text>
            </View>
            
            <ButtonComp title="LOGIN" type="circle" onPress={()=>props.navigation.navigate("BottomNavigation")}/>

            <View style={{marginTop:40,marginBottom:40}}>
            </View>
                </View>

                <AccountFooter isLoginScreen={true} onPress={()=>props.navigation.navigate("Signup")}/>

        </View>
        </ScrollView>
    )
}

export default Login
