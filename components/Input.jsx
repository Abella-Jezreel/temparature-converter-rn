import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./Input.style";

const Input = ({ defaultValue }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        maxLength={3}
        placeholder="Enter temperature"
        defaultValue={defaultValue}
      />
      <Text style={styles.degreeText}>°C</Text>
    </View>
  );
};

export default Input;
