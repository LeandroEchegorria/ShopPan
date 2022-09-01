/* eslint-disable semi */
/* eslint-disable react/prop-types */
import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { CategoryItem } from '../../components'
import { selectCategory } from '../../store/actions/category.action'
import { styles } from './styles'

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Products', {
      name: item.name
    })
  }
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
  const keyExtractor = (item, index) => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  )
}

export default Categories;
