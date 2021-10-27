import React from 'react'
import { View, Text, ScrollView, Image,FlatList } from 'react-native'
import colors from '../assets//constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import AccountFooter from '../component/AccountFooter'
import LogoContainer from '../component/LogoContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Cartitem from '../component/Cartitem'
import OrderHistoryItem from '../component/OrderHistoryItem'
import HeadingComp from '../component/HeadingComp'

const OrderHistory = (props) => {
    const data=[
        {title:'Title here',unread:true,image:require('../assets/images/bottle.png')},
        {title:'Title here',unread:false,image:require('../assets/images/bottle.png')},
        {title:'Title here',unread:false,image:require('../assets/images/bottle.png')},
        {title:'Title here',unread:false,image:require('../assets/images/bottle.png')},

    ]
    return (
          <View style={[styleSheet.TabScreenContainer,{alignItems:'center'}]}>
       
           <HeadingComp title="Order History"/>
  
            <View style={{width:'100%',marginRights:50}}>
          <FlatList
            data={data}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>props.navigation.navigate("OrderDetail",{item})}>
                <View style={{marginRights:50}}>
                <OrderHistoryItem unread={item.unread}/>
                </View>
                </TouchableOpacity>

            }}/>
            </View>
        </View>


    )
}

export default OrderHistory
