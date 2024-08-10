import { View, Text, TextInput } from "react-native";
import { styles } from "./Components.style";

const Input = ({ defaultValue, handleTemperatureChange, unit }) => {
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
      <Text style={styles.degreeText}>°{unit}</Text>
    </View>
  );
};

export default Input;
