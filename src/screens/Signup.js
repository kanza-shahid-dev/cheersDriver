import React,{useState} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import colors from '../assets//constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import AccountFooter from '../component/AccountFooter'
import LogoContainer from '../component/LogoContainer'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePickerInput from '../component/DatePickerInput'

const Signup = (props) => {
  const [nameError,setNameError]=useState(null)
  const [emailError,setEmailError]=useState(null)
  const [birthdateError,setbirthdateError]=useState(null)
  const [userIdError,setuserIdError]=useState(null)
  const [passwordError,setpasswordError]=useState(null)
  const [addressError,setaddressError]=useState(null)


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
  function validateName(value)
  {
    if(value.length==0)
    setNameError("Name required")
    else
    setNameError(null)
  }
  function validateBirthdate(value)
  {
    if(value.length==0)
    setbirthdateError("Birthdate required")
    else
    setbirthdateError(null)
  } 
  function validateUserId(value)
  {
    if(value.length==0)
    setuserIdError("Id required")
    else
    setuserIdError(null)
  } 
  function validateAddress(value)
  {
    if(value.length==0)
    setaddressError("Address required")
    else
    setaddressError(null)
  } 
 
  
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={{flex:1,backgroundColor:colors.primary,padding:20,alignItems:'center'}}>
           <LogoContainer/>
            <View style={{width:'100%',backgroundColor:'white',borderRadius:10,padding:20,alignItems:'center'}}>
            <Text style={styleSheet.heading}>Welcome</Text>
            <Text style={{fontSize:17,color:'grey'}}>create your New account</Text>

            <InputComp label="Full Name" icon="user-alt" error={nameError} onChangeText={(value)=>validateName(value)}/>

            <InputComp label="Email Address" icon="envelope"  keyboardType="email-address" error={emailError} onChangeText={(value)=>validateEmail(value)}/>

            <InputComp label="Password" isPassword={true} icon="eye" error={passwordError} onChangeText={(value)=>validatePassword(value)}/>

            <DatePickerInput label="Date of Birth"  icon="calendar" error={birthdateError} onChangeText={(value)=>validateBirthdate(value)}/>

            <InputComp label="Address" icon="map-marker-alt" error={addressError} onChangeText={(value)=>validateAddress(value)}/>
            
            <View style={{marginTop:65}}>
            <ButtonComp title="SIGNUP" type="circle" onPress={()=>props.navigation.navigate("AccountCreated")}/>
            </View>

            <View style={{marginTop:40}}>
            </View>
                </View>

                <AccountFooter isLoginScreen={false} onPress={()=>props.navigation.navigate("Login")}/>

        </View>
        </ScrollView>
    )
}

export default Signup
