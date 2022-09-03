/* eslint-disable react/prop-types */
import IoniIcons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { colors } from '../../constants/colors'
import { styles } from './styles'

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.name}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailQty}>{item.quantity}</Text>
          <Text style={styles.detailPrice}>$ {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <IoniIcons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem
