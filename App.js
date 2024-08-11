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
import Cold from "./assets/cold.png";
import {convertTemperature, getOppositeUnit} from "./utils/temperature";
import ButtonConvert from './components/ButtonConvert'

export default function App() {
  const [temperature, setTemperature] = useState(0);
  const [unit, setUnit] = useState("C");
  const oppositeUnit = getOppositeUnit(unit)
  const convertedTemperature = convertTemperature(temperature, unit);
  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  return (
    <ImageBackground style={styles.background} source={unit === 'C' ? Hot : Cold}>
      <SafeAreaProvider>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <View style={styles.workspace}>
              <DisplayText value={convertedTemperature} unit={oppositeUnit} />
              <Input
                defaultValue={"0"}
                handleTemperatureChange={handleTemperatureChange}
                unit={unit}
                onUnitPress={() => setUnit(getOppositeUnit(unit))}
              />
              <ButtonConvert />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
