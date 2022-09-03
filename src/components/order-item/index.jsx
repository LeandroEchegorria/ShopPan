/* eslint-disable react/prop-types */
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { colors } from '../../constants/colors'
import { styles } from './styles'

const formatDate = (time) => {
  const date = new Date(time)
  return date.toLocaleDateString()
}

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailTotal}>$ {item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default OrderItem
