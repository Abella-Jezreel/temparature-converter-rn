import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styles } from './styles/Components.style'

const ButtonConvert = ({unit, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
  )
}

export default ButtonConvert