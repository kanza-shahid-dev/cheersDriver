import React from 'react'
import { View, Text,Image, ImageBackground, Alert, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StarRating from 'react-native-star-rating'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import HeaderBanner from '../component/HeaderBanner'

const{width,height}=Dimensions.get('window')
const ItemDetail = (props) => {
    const item=props.route.params.item

    function addIteminCart()
    {
        Alert.alert("Added","Item has been added in Cart")
    }
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:item.backgroundColor,paddingTop:20}}>
            
            <View style={{height:height/3,marginBottom:20,paddingLeft:20,paddingRight:20,marginTop:5}}>
            <HeaderBanner color="white" navigation={props.navigation}/>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Image source={item.image} style={{height:height*0.3,marginLeft:20}}/>
                <Image source={item.image}  style={{marginLeft:10,height:height*0.25}}/>
                <Image source={item.image}  style={{height:height*0.3,marginLeft:10}}/>
            </View>
            </View>


            <ScrollView style={{borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10}} contentContainerStyle={{flexGrow:1}}>
            <View style={{borderTopLeftRadius:30,borderTopRightRadius:30,flex:1,padding:20,backgroundColor:'white'}}>

            <Text style={[styleSheet.secHeading,{marginTop:20,marginBottom:5}]}>{item.title}</Text>

            <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={4}
                        starSize={15}
                        containerStyle={{width:100}}
                        starStyle={{color:colors.primary}}
                      />
            
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{flex:1}}><Text style={styleSheet.heading}>R {item.price}</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}>
                 <TouchableOpacity onPress={()=>props.navigation.navigate("WishList")}>
                  <Image source={require('../assets/images/heart.png')}/>
                 </TouchableOpacity>
               </View>
            </View>
            
            <Text style={styleSheet.thirdHeading}>Description</Text>
            
            <Text style={{marginTop:10}}>{item.detail}</Text>

            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginTop:20,marginBottom:20}}>
               <ButtonComp title="ADD TO CART" type="circle" icon="shopping-cart" onPress={()=>props.navigation.navigate("Cart")}/>
            </View>

            </View>
            </ScrollView>
            </View>

        </View>
    )
}

export default ItemDetail
