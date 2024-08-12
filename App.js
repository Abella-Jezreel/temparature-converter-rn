  import React, { useState } from "react";
  import {
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
  import {convertTemperature, getOppositeUnit, isCold} from "./utils/temperature";
  import ButtonConvert from './components/ButtonConvert'

  export default function App() {
    const [temperature, setTemperature] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [unit, setUnit] = useState("°C");
    const oppositeUnit = getOppositeUnit(unit)
    const convertedTemperature = convertTemperature(temperature, unit);
    const isColdTemperature = isCold(temperature, unit);
    const handleTemperatureChange = (value) => {
      setInputValue(value);
    };
    const handleUnitPress = () => {
      setUnit(oppositeUnit);
      setTemperature('');
      setInputValue('');
    }
    const handleConvertPress = () => {
      setTemperature(inputValue);
    }

    return (
      <ImageBackground style={styles.background} source={isColdTemperature ? Cold : Hot}>
        <SafeAreaProvider>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
              <View style={styles.workspace}>
                <DisplayText value={temperature === '' ? 0 : convertedTemperature} unit={oppositeUnit} />
                <Input
                  defaultValue={inputValue}
                  handleTemperatureChange={handleTemperatureChange}
                  unit={unit}
                  onUnitPress={handleUnitPress}
                />
                <ButtonConvert unit={oppositeUnit} onPress={handleConvertPress}/>
              </View>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </SafeAreaProvider>
      </ImageBackground>
    );
  }
