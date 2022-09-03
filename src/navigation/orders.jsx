import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { colors } from '../constants/colors'
import { OrdersScreen } from '../screens/index'
import { isIOS } from '../utils/functions'

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary
        },
        headerTintColor: isIOS ? colors.text : colors.textLight,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold'
        }
      }}>
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  )
}

export default OrdersNavigator
