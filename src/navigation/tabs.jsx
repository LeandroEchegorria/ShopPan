import IoniIcons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { colors } from '../constants/colors'
import CartNavigator from './cart'
import OrdersNavigator from './orders'
import ShopNavigator from './shop'

const styles = StyleSheet.create({
  tabBarIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.text
  },
  tabBarTextFocused: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.text
  }
})

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IoniIcons
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={colors.primary}
              />
              <Text style={focused ? styles.tabBarTextFocused : styles.tabBarText}>Shop</Text>
            </View>
          ),
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IoniIcons
                name={focused ? 'cart' : 'cart-outline'}
                size={20}
                color={colors.primary}
              />
              <Text style={focused ? styles.tabBarTextFocused : styles.tabBarText}>Cart</Text>
            </View>
          ),
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <IoniIcons
                name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
                size={20}
                color={colors.primary}
              />
              <Text style={focused ? styles.tabBarTextFocused : styles.tabBarText}>Orders</Text>
            </View>
          ),
          tabBarShowLabel: false
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs
