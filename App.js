import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Input from "./components/Input";
import DisplayText from "./components/DisplayText";
import Hot from "./assets/hot.png";

export default function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("C");

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  return (
    <ImageBackground style={styles.background} source={Hot}>
      <SafeAreaProvider>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <View style={styles.workspace}>
              <DisplayText value={temperature} unit={unit} />
              <Input
                defaultValue={"0"}
                handleTemperatureChange={handleTemperatureChange}
                unit={unit}
              />
              <Text>Button</Text>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
