import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { colors } from '../constants/colors'
import { CategoriesScreen, ProductScreen, ProductsScreen } from '../screens/index'
import { isIOS } from '../utils/functions'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary
        },
        headerTintColor: isIOS ? colors.text : colors.textLight,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold'
        }
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          headerTitle: route.params.name /* muestra titulo al entrar en categoria */
        })}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ route }) => ({
          headerTitle: route.params.name
        })}
      />
    </Stack.Navigator>
  )
}

export default ShopNavigator
