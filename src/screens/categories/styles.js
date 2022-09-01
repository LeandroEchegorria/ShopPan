import { StyleSheet, StatusBar } from 'react-native'

import { isAndroid } from '../../utils/functions'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: isAndroid ? StatusBar.currentHeight : 0
  }
})
