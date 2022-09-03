import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { OrderItem } from '../../components'
import { ORDERS } from '../../constants/data/orders'
import { deleteOrder, getOrders } from '../../store/actions/orders.action'
import { styles } from './styles'

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.orders)
  const items = ORDERS

  const onHandleDelete = (id) => {
    dispatch(deleteOrder(id))
  }

  const keyExtractor = (item) => item.id.toString()

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onHandleDelete} />
  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders())
    }, [dispatch])
  )

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList data={items} keyExtractor={keyExtractor} renderItem={renderItem} />
      </View>
    </View>
  )
}

export default Orders
