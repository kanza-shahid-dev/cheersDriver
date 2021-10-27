import React from 'react'
import { View, Text,Image, FlatList, ScrollView, ImageBackground } from 'react-native'
import StarRating from 'react-native-star-rating'
import colors from '../assets/constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import HeaderBanner from '../component/HeaderBanner'

const Categories = (props) => {
    const categoryItem=props.route.params.item
    const data=[
        {title:'Title here',image2:require('../assets/images/bottle5.png'),image:require('../assets/images/bottle5.png'),price:750,detail:'item 3 detail here',backgroundColor:colors.lightGreen},
        {title:'Title 1 here',image2:require('../assets/images/bottle.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item 1 detail here',backgroundColor:colors.green},
        {title:'Title 2 here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle2.png'),price:800,detail:'item 2 detail here',backgroundColor:colors.orange},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item detail here',backgroundColor:colors.orange},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item detail here',backgroundColor:colors.orange},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item detail here',backgroundColor:colors.orange},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item detail here',backgroundColor:colors.orange},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item detail here',backgroundColor:colors.orange},
        {title:'Title here',image2:require('../assets/images/bottle2.png'),image:require('../assets/images/bottle.png'),price:750,detail:'item detail here',backgroundColor:colors.orange},

    ]
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styleSheet.TabScreenContainer}>
            <HeaderBanner left="Category Name" color={colors.primary} navigation={props.navigation}/>
      
      
       <Text style={{fontSize:28,color:colors.darkGrey,fontWeight:'800',marginTop:30}}>Top Item Name</Text>
       <Text style={{fontSize:19,marginTop:10,marginBottom:10}}>Detail Here</Text>

      <View style={{height:175,paddingBottom:12,borderRadius:15,backgroundColor:'#F0A54F', flexDirection:'row',alignItems:'flex-end',width:'100%'}}>
          <View style={{flex:1,marginLeft:10}}>
              <Text style={{color:'white',marginLeft:10,marginBottom:15,fontSize:19,fontWeight:'bold'}}>Price: R 300</Text>
              <ButtonComp type="white" title="SHOP NOW" />
          </View>
          <View style={{alignItems:'flex-end'}}>
          <Image source={require('../assets/images/top.png')} style={{}}/>
          </View>
      </View>

      {/* <View style={{flex:1,borderWidth:1,flexDirection:'row'}}>
      <ImageBackground source={require('../assets/images/detail.png')} style={{width:'100%',height:300}} />
          
      <View style={{justifyContent:'flex-end',backgroundColor:categoryItem.backgroundColor}}>
              <Text style={{color:'white'}}>Price</Text>
              <Text style={{color:'white'}}>R {categoryItem.price}</Text>

          </View>
    </View> */}

       {/* <Image source={require('../assets/images/topItem.png')} style={{width:'100%'}} /> */}

       <FlatList
            data={data}
            renderItem={({item})=>{
                return <View style={{padding:5,flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Image source={item.image2}/>
                    <View style={{flex:4,paddingLeft:20}}>
                       <Text style={[styleSheet.thirdHeading,{marginTop:30}]}>{item.title}</Text>
                       <Text style={{color:'grey'}}>{item.detail}</Text>
                       <View style={{marginTop:10}}>
                       <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={4}
                        starSize={15}
                        containerStyle={{width:100}}
                        starStyle={{color:colors.primary}}
                      />
                      </View>

                    </View>
                    <View style={{flex:2}}>
                    <ButtonComp title="DETAIL" type="small" onPress={()=>props.navigation.navigate("ItemDetail",{item})}/>
                    </View>

                    </View>
            }}/>
        </View>
        </ScrollView>
    )
}

export default Categories
