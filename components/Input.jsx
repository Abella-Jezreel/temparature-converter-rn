import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { styles } from "./styles/Components.style";

const Input = ({
  defaultValue,
  handleTemperatureChange,
  unit,
  onUnitPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        maxLength={3}
        placeholder="Enter temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(value) => handleTemperatureChange(value)}
      />
      <TouchableOpacity style={styles.degreeTouch} onPress={onUnitPress}>
        <Text style={styles.degreeText}>{unit}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
