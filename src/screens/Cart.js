import React,{useState} from 'react'
import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import colors from '../assets//constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import AccountFooter from '../component/AccountFooter'
import LogoContainer from '../component/LogoContainer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Cartitem from '../component/Cartitem'
import HeadingComp from '../component/HeadingComp'

const Cart = (props) => {
   const [quantity,setQuantity]=useState(10)
   const data=[
      {id:1,title:'Title 1 Here',price:150,quantity:10},
      {id:2,title:'Title 2 Here',price:100,quantity:2},
  ]
  
  function deleteItem(id)
  {
      const item=DATA.filter(data=>data.id!=id)
      setDATA(item)
  }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={[styleSheet.TabScreenContainer,{alignItems:'center'}]}>
       
          <HeadingComp title="My Cart"/>

         <View style={{width:'100%'}}>
            <FlatList
            data={data}
            renderItem={({item})=>{
                return <View style={{padding:5,alignItems:'center'}}>
                     <Cartitem data={data} id={item.id} title={item.title} quantity={item.quantity} price={item.price}/>
                    </View>

            }}/>
         </View>
         
            
            <View style={{width:'100%',marginTop:10,marginBottom:20,alignItems:'flex-start'}}>
              <View style={{flexDirection:'row'}}>
                 <View style={{flex:1}}><Text style={styleSheet.secHeading}>Shipping Cost</Text></View>
                 <Text style={styleSheet.secHeading}> R 500 </Text>
              </View>
              <Text>(R 500 per Product)</Text>
              <View style={{flexDirection:'row'}}>
                 <View style={{flex:1}}><Text style={styleSheet.secHeading}>Subtotal</Text></View>
                 <Text style={styleSheet.secHeading}> R 800 </Text>
              </View>

              <View style={{flexDirection:'row',marginTop:30}}>
                 <View style={{flex:1}}><Text >Add Notes for Driver</Text></View>
                 <Image source={require('../assets/icons/sticky-note.png')} style={{marginTop:10}}/>

              </View>
              <Text style={styleSheet.fourthHeading}>(Optional)</Text>

            </View>

            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginTop:20,marginBottom:20}}>
               <ButtonComp title="CONTINUE" type="circle" onPress={()=>props.navigation.navigate("Checkout")}/>
            </View>
                </View>


        </ScrollView>
    )
}

export default Cart
