import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Components.style'

const DisplayText = ({value, unit}) => {
  return (
      <Text style={styles.DisplayText}>{value} °{unit}</Text>
  )
}

export default DisplayText