import React,{useState,useEffect} from 'react'
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
import WishListItem from '../component/WishListItem'
import HeadingComp from '../component/HeadingComp'

const WishList = (props) => {
  
    const[DATA,setDATA]=useState([])
    const data=[
        {id:1,title:'Title here',price:500,image:require('../assets/images/bottle.png')},
        {id:2,title:'Title 2 here',price:200,image:require('../assets/images/bottle.png')},
        {id:3,title:'Title 3 here',price:300,image:require('../assets/images/bottle.png')},
    ]
    useEffect(()=>{
        setDATA(data)
    },[])
    function removeItem(id)
    {
        const item=DATA.filter(data=>data.id!=id)
        setDATA(item)
        console.log(DATA)

    }
    return (
          <View style={[styleSheet.TabScreenContainer,{alignItems:'center'}]}>
       
            <HeadingComp title="My WishList"/>
  
            <View style={{width:'100%'}}>
          <FlatList
            data={DATA}
            renderItem={({item})=>{
                return <View style={{padding:5,alignItems:'center'}}>
                <WishListItem title={item.title} price={item.price} removeItem={()=>removeItem(item.id)}/>
                </View>

            }}/>
            </View>
        </View>


    )
}

export default WishList
