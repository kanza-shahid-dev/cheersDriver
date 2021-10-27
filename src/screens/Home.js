import React,{useState,useEffect} from 'react'
import { View, Text, FlatList,Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import SearchBar from '../component/SearchBar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors'
import { SliderBox } from "react-native-image-slider-box";
import HeaderBanner from '../component/HeaderBanner'
import OrderHistory from './OrderHistory'
import OrderHistoryItem from '../component/OrderHistoryItem'
import NotificationItem from '../component/NotificationItem'

const{width,height}=Dimensions.get('window')
const Home = (props) => {
    const data=[
        {title:'Title here',image:require('../assets/images/bottle.png')},
        {title:'Title here',image:require('../assets/images/bottle.png')},
        {title:'Title here',image:require('../assets/images/bottle.png')},
        {title:'Title here',image:require('../assets/images/bottle.png')},

    ]
    const notificationData=[
        {title:'Title here',image:require('../assets/images/bottle.png')},

    ]
    const [DATA,setDATA]=useState([])
    useEffect(()=>{
        setDATA(data)
    },[])
  
    const images=[
        require('../assets/images/banner.png'),   
        require('../assets/images/logo.png'),   
        require('../assets/images/banner.png'),  
        require('../assets/images/logo.png'),   

    ]
    function Search(text)
    {
        const filteredData=data.filter((item)=>item.title.toLowerCase().includes(text.toLowerCase()))
        console.log("____",filteredData)
        setDATA(filteredData)
       // setSearchbarValue(text)
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styleSheet.TabScreenContainer}>
           
           <HeaderBanner left={"Good morning"} userName="John" color={colors.primary} navigation={props.navigation}/>

           <View style={{flexDirection:'row',marginBottom:5,paddingLeft:5,marginTop:12}}>
            <View style={{flex:3}}><Text style={[styleSheet.firstHeading,{color:colors.darkGrey}]}>Notification</Text></View>
            <View style={{flex:1,paddingRight:5,alignItems:'flex-end'}}><ButtonComp title="SEE ALL" type="small" onPress={()=>props.navigation.navigate("Notification")}/></View>
            </View>
            <FlatList
            data={notificationData}
            renderItem={({item})=>{
                return <View style={{marginRights:50}}>
                <NotificationItem/>
                </View>

            }}/>
         
            <View style={{flexDirection:'row',marginBottom:5,paddingLeft:5,marginTop:12}}>
            <View style={{flex:3}}><Text style={[styleSheet.firstHeading,{color:colors.darkGrey}]}>My Order History</Text></View>
            <View style={{flex:1,alignItems:'flex-end'}}><ButtonComp title="SEE ALL" type="small" onPress={()=>props.navigation.navigate("OrderHistory")}/></View>
            </View>
            <View style={{width:'100%',marginRights:50}}>
          <FlatList
            data={data}
            renderItem={({item})=>{
                return <View style={{marginRights:50}}>
                <OrderHistoryItem/>
                </View>

            }}/>
            </View>
        </View>
        </ScrollView>
    )
}

export default Home
