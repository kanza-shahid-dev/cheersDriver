import React,{useState,useEffect} from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import styleSheet from '../assets/constants/styleSheet'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/constants/colors';

const Cartitem = (props) => {
    const [quantity,setquantity]=useState()
    const [price,setprice]=useState()
    const [subTotal,setsubTotal]=useState(250)

    const [DATA,setDATA]=useState([])
    const data=[
        {id:1,title:'Title 1 Here',price:150,quantity:1},
        {id:2,title:'Title 2 Here',price:100,quantity:2},
    ]
    

    useEffect(()=>{
        if(props.data==undefined)
        {
            setDATA(data)

        }
        else
        {
        setDATA(props.data)
        setquantity(props.quantity)
        setprice(props.price)
        }
        
    },[])
    function incrementCounter(id)
  {
      const item=DATA.find(data=>data.id==id)
         item.quantity=item.quantity+1
         item.price=item.price+10
         console.log(DATA)
         setDATA(DATA)
        // setsubTotal(subTotal+10)
         setquantity(item.quantity)
         setprice(item.price)
  }
  function decrementCounter(id)
  {
      const item=DATA.find(data=>data.id==id)
     
      if(item.quantity!=0)
      {
         item.quantity=item.quantity-1
         item.price=item.price-10
         setDATA(DATA)
        // setsubTotal(subTotal-10)
         setquantity(item.quantity)
         setprice(item.price)
      }
           
  }
  function deleteItem(id)
    {
        const item=DATA.filter(data=>data.id!=id)
        setDATA(item)
    }
    return (
        <View style={{width:'100%',margin:1,flexDirection:'row',borderWidth:0.5,borderRadius:20,borderColor:colors.borderColor}}>
            <View style={{alignItems:'center'}}>
            <Image source={require('../assets/images/bottle.png')} style={{height:130,width:80,margin:10,resizeMode:'contain'}}/>
            </View>
            <View style={{flex:1,justifyContent:'center',paddingTop:5,paddingBottom:5}}>
            <View><Text style={[styleSheet.thirdHeading,{color:colors.darkGrey}]}>
                {props.title}
            </Text>
            </View>
            <Text style={[styleSheet.thirdHeading,{color:colors.darkGrey}]}>
                R {price}
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
            <TouchableOpacity onPress={()=>incrementCounter(props.id)} style={{padding:5}}><Image source={require('../assets/icons/plus.png')}/></TouchableOpacity>
            <View style={{backgroundColor:colors.primary,paddingLeft:10,paddingRight:10,borderRadius:20,marginLeft:10,marginRight:10}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>{quantity}</Text>
            </View>
            <TouchableOpacity onPress={()=>decrementCounter(props.id)} style={{padding:5}}><Image source={require('../assets/icons/minus.png')}/></TouchableOpacity>

            </View>
            </View>
            <View style={{justifyContent:'center',padding:19,alignItems:'flex-end'}}>
                <TouchableOpacity onPress={()=>deleteItem(props.id)}>
                <Image source={require('../assets/icons/delete.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cartitem
