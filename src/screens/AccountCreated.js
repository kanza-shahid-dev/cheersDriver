import React from 'react'
import { View, Text ,Image} from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import LogoContainer from '../component/LogoContainer'

const AccountCreated = (props) => {
    return (
        <View style={{flex:1,backgroundColor:'white',padding:20}}>

            <LogoContainer/>

            <View style={{alignItems:'center',justifyContent:'center'}}>            
              <Image source={require('../assets/images/created.png')} style={{height:220,width:280,marginBottom:20}}/>
              <Text style={styleSheet.heading}>Account Created</Text>
            </View>


            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <ButtonComp title="GET STARTED" type="circle" textColor="white" onPress={()=>props.navigation.navigate("BottomNavigation")}/>
            </View>

        </View>
    )
}

export default AccountCreated
