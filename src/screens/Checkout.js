import React,{useState} from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import colors from '../assets//constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import AccountFooter from '../component/AccountFooter'
import LogoContainer from '../component/LogoContainer'
import {BottomSheet} from 'react-native-btr'
import CircularInputComp from '../component/CircularInputComp'
import PaymentOption from '../component/PaymentOption'

const Checkout = (props) => {
    const[bottomsheetVisible,setbottomsheetVisible]=useState(false)
    const[bottomsheet2Visible,setbottomsheet2Visible]=useState(false)
    
    const [nameError,setNameError]=useState(null)
    const [emailError,setEmailError]=useState(null)
    const [birthdateError,setbirthdateError]=useState(null)
    const [userIdError,setuserIdError]=useState(null)
    const [phoneError,setphoneError]=useState(null)
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
    function validatePhone(value)
    {
      if(value.length==0)
      setphoneError("Phone required")
      else
      setphoneError(null)
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

    //bottom sheet
    const [firstnameError,setfirstnameError]=useState(null)
    const [lastnameError,setlastnameError]=useState(null)
    const [cardnumberError,setcardnumberError]=useState(null)
    const [securitycodeError,setsecuritycodeError]=useState(null)
  
  
    function validateFirstName(value)
    {
      if(value.length==0)
        setfirstnameError("First Name required")
      else
      setfirstnameError(null)
    }
    function validateLastName(value)
    {
      if(value.length==0)
      setlastnameError("Last Name required")
      else
      setlastnameError(null)
    }
    function validateSecurityCode(value)
    {
      if(value.length==0)
      setsecuritycodeError("Securtiy code required")
      else
      setsecuritycodeError(null)
    }
    function validateCardNum(value)
    {
      if(value.length==0)
      setcardnumberError("Card number required")
      else
      setcardnumberError(null)
    }
    
    return (
        <ScrollView style={{flex:1,backgroundColor:'white'}} contentContainerStyle={{flexGrow:1}}>
            <View style={{width:'100%',backgroundColor:'white',borderRadius:10,padding:20,alignItems:'center'}}>
            <View style={{width:'100%',alignItems:'flex-start'}}>
            <Text style={styleSheet.heading}>Checkout</Text>
            </View>

            <InputComp label="Full Name" icon="user-alt" keyboardType="name-phone-pad" error={nameError} onChangeText={(value)=>validateName(value)}/>

            <InputComp label="Email Address" icon="envelope"  keyboardType="email-address" error={emailError} onChangeText={(value)=>validateEmail(value)}/>

            <InputComp label="User Id" icon="id-badge"  keyboardType="number-pad" error={userIdError} onChangeText={(value)=>validateUserId(value)}/>

            <InputComp label="Delievery Address" icon="map-marker-alt" keyboardType="name-phone-pad" error={addressError} onChangeText={(value)=>validateAddress(value)}/>
            
            <InputComp label="Phone No" keyboardType="number-pad" icon="phone" error={phoneError} onChangeText={(value)=>validatePhone(value)}/>

            <View style={{width:'100%',marginTop:10,marginBottom:20,alignItems:'flex-start'}}>
            <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}><Text style={styleSheet.secHeading}>Subtotal</Text></View>
                    <Text style={styleSheet.secHeading}> R 800 </Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={{flex:1}}><Text style={styleSheet.secHeading}>Shipping Cost</Text></View>
                    <Text style={styleSheet.secHeading}> R 500 </Text>
                </View>
              
             </View>


             <View style={{flexDirection:'row',marginBottom:10,marginTop:10,width:'100%'}}>
             <View style={{flex:1,alignItems:'flex-start'}}>
             <Text style={{color:'grey'}}>Payment method</Text>
             </View>
             <View style={{flex:1,alignItems:'flex-end'}}>
                 <TouchableOpacity onPress={()=>setbottomsheetVisible(true)}>
                    <Text style={{color:colors.primary,fontWeight:'800'}}>+ Add Card</Text>
                  </TouchableOpacity>
             </View>
             </View>

             <PaymentOption title="Cash on delievery" checked={true} value="cash"/>
             <PaymentOption title="***** **** ****2187" checked={false} icon={require('../assets/icons/visa.png')} value="visa"/>
             <PaymentOption title="johndoe@gmail.com" checked={false} icon={require('../assets/icons/paypal.png')} value="paypal"/>


             <View>

            <View style={{marginTop:10}}>
            <ButtonComp title="PLACE ORDER" type="circle" onPress={()=>setbottomsheet2Visible(true)}/>
            </View>
            
            <BottomSheet
                visible={bottomsheetVisible}
                onBackButtonPress={()=>setbottomsheetVisible(false)}
                onBackdropPress={()=>setbottomsheetVisible(false)}
                >
                <View style={{backgroundColor:'white',padding:20,borderTopLeftRadius:20,borderTopRightRadius:20}}>  
                <ScrollView contentContainerStyle={{flexGrow:1}}>
               
                <View style={{borderBottomWidth:1,padding:10,borderColor:colors.silver,flexDirection:'row'}}>
                <View  style={{flex:1}}><Text style={{fontWeight:'700'}}>Add Credit/Debit Card</Text></View>
                <TouchableOpacity onPress={()=>setbottomsheetVisible(false)}><View style={{justifyContent:'flex-end'}}><Icon name="close" size={20}/></View></TouchableOpacity>
                </View>
                <View style={{width:'100%', padding:10}}>
                
                <CircularInputComp placeholder="Card Number" keyboardType="number-pad" error={cardnumberError} onChangeText={(value)=>validateCardNum(value)}/>
                
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{paddingLeft:5}}>Expiry</Text>
                <View style={{flex:1,marginLeft:70,marginRight:20}}><CircularInputComp placeholder="MM" keyboardType="number-pad" textAlignCenter={true}/></View>
                <View style={{flex:1}}><CircularInputComp placeholder="YY" keyboardType="number-pad" textAlignCenter={true}/></View>
                </View>

                <CircularInputComp placeholder="Security Code" keyboardType="number-pad" error={securitycodeError} onChangeText={(value)=>validateSecurityCode(value)}/>
                <CircularInputComp placeholder="First Name" error={firstnameError} onChangeText={(value)=>validateFirstName(value)}/>
                <CircularInputComp placeholder="Last Name" error={lastnameError} onChangeText={(value)=>validateLastName(value)}/>
                
                <View style={{width:'100%',alignItems:'center',marginTop:5}}>
                <ButtonComp title="ADD CARD" icon="plus" type="circle" onPress={()=>setbottomsheetVisible(true)}/>
                </View>
                </View>

                </ScrollView>

                </View>

            </BottomSheet>

            <BottomSheet
                visible={bottomsheet2Visible}
                onBackButtonPress={()=>setbottomsheet2Visible(false)}
                onBackdropPress={()=>setbottomsheet2Visible(false)}
                >

                <View style={{backgroundColor:'white',alignItems:'center',padding:20,borderTopLeftRadius:20,borderTopRightRadius:20}}>  
                <View style={{width:'100%',alignItems:'flex-end'}}>
                <TouchableOpacity onPress={()=>setbottomsheet2Visible(false)}>
                  <Icon name="close" size={20}/></TouchableOpacity>
                  </View>
               <Image source={require('../assets/images/created.png')}/>
               <Text style={[styleSheet.heading,{marginBottom:30}]}>Order Placed</Text>
                
                <ButtonComp title="   BACK TO HOME   " type="circle" onPress={()=>props.navigation.navigate("Home")}/>

                </View>

            </BottomSheet>
</View>   
                </View>


        </ScrollView>
    )
}

export default Checkout
