import React,{useState} from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity, Alert } from 'react-native'
import colors from '../assets//constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import AccountFooter from '../component/AccountFooter'
import LogoContainer from '../component/LogoContainer'
import { BottomSheet } from 'react-native-btr'
import * as ImagePicker from "react-native-image-picker"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePickerInput from '../component/DatePickerInput'
import HeadingComp from '../component/HeadingComp'


const Profile = (props) => {
    const [bottomsheetVisible,setbottomsheetVisible]=useState(false)
    const[imageFile,setImageFile]=useState(null)
    const [isImageSelected,setisImageSelected]=useState(false)
    const [ImageSource,setImageSource]=useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg');
  
    function selectFromGallery(){
        setbottomsheetVisible(false);
        let options = {
          storageOptions: {
          skipBackup: true
          }
          };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.error) {
            }
            else if (response.didCancel) {
            }
            else{
              setisImageSelected(true)
              setImageFile(response.assets[0])
                setImageSource(response.assets[0].uri);
            }
          });
    }
    function selectFromCamera() {
        setbottomsheetVisible(false);
        let options = {
          storageOptions: {
            skipBackup: true
          }
        };
        
        ImagePicker.launchCamera(options, (response) => {
            if (response.error) {
            }
            else if (response.didCancel) {
            }
            else {
              setisImageSelected(true)
              setImageFile(response.assets[0])
              setImageSource(response.assets[0].uri);
            }
          });
        
      }

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
            
            <View style={{width:'100%',backgroundColor:'white',borderRadius:10,padding:20,alignItems:'center'}}>
            <View style={{width:'100%',alignItems:'center',flexDirection:'row',marginBottom:10}}>
            <HeadingComp title="Profile" />
         
            </View>
            <TouchableOpacity onPress={()=>setbottomsheetVisible(true)}>
            {isImageSelected?
            <Image source={{uri:ImageSource}} style={{height:95,width:95,borderRadius:45,marginBottom:17}}/>
            :
            <Image source={require('../assets/images/profile.png')}/>
            }
            </TouchableOpacity>
            <InputComp label="Full Name" icon="user-alt" keyboardType="name-phone-pad" error={nameError} onChangeText={(value)=>validateName(value)}/>

            <InputComp label="Email Address" icon="envelope" keyboardType="email-address" error={emailError} onChangeText={(value)=>validateEmail(value)}/>

            <InputComp label="Password" isPassword={true} icon="eye" error={passwordError} onChangeText={(value)=>validatePassword(value)}/>

            <DatePickerInput label="Date of Birth"  icon="calendar" error={birthdateError} onChangeText={(value)=>validateBirthdate(value)}/>

            <InputComp label="Address"  icon="map-marker-alt" keyboardType="name-phone-pad" error={addressError} onChangeText={(value)=>validateAddress(value)}/>

            <View style={{marginTop:55}}>
            <ButtonComp title="UPDATE" type="circle" onPress={()=>Alert.alert("Updated","Account information has been updated")}/>
            </View>

            <BottomSheet
                visible={bottomsheetVisible}
                onBackButtonPress={()=>setbottomsheetVisible(false)}
                onBackdropPress={()=>setbottomsheetVisible(false)} 
                onCancel={()=>setbottomsheetVisible(false)}>
                <View style={{backgroundColor:'white',padding:15}}>
                <TouchableOpacity onPress={selectFromCamera}>
                <Text style={{fontSize:18,padding:20,borderBottomWidth:1,borderColor:'grey'}}>Capture from Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={selectFromGallery}>
                <Text style={{fontSize:18,padding:20}}>Choose From Gallery</Text>
                </TouchableOpacity>
                </View>
            </BottomSheet>
           </View>

        </ScrollView>
    )
}

export default Profile
