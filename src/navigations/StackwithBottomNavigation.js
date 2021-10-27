import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import AccountCreated from '../screens/AccountCreated';
import Profile from '../screens/Profile';
import Checkout from '../screens/Checkout';
import BottomNavigation from './BottomNavigation';
import WishList from '../screens/WishList';
import Categories from '../screens/Categories';
import OrderHistory from '../screens/OrderHistory';
import OrderDetail from '../screens/OrderDetail';


const StackwithBottomNavigation = () => {
    const navigation=createStackNavigator();
    return (
        <navigation.Navigator screenOptions={{headerShown:false}} initialRouteName="OrderHistory" >
           <navigation.Screen name="OrderHistory" component={OrderHistory}></navigation.Screen>
           <navigation.Screen name="OrderDetail" component={OrderDetail}></navigation.Screen>
              </navigation.Navigator>
    )
}

export default StackwithBottomNavigation
