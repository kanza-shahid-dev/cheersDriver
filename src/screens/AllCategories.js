import React from 'react'
import { View, Text,Image, FlatList, ScrollView } from 'react-native'
import StarRating from 'react-native-star-rating'
import colors from '../assets/constants/colors'
import styleSheet from '../assets/constants/styleSheet'
import ButtonComp from '../component/ButtonComp'
import HeaderBanner from '../component/HeaderBanner'

const AllCategories = (props) => {
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
          <View style={{marginBottom:12}}>
            <HeaderBanner left="Categories" color={colors.primary} navigation={props.navigation}/>
         </View> 

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

export default AllCategories
