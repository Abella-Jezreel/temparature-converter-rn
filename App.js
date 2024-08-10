import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground } from "react-native";
import { styles } from "./App.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Input from "./components/Input";
import  Hot from "./assets/hot.png"

export default function App() {
  return (
    <>
      <ImageBackground style={styles.background} source={Hot}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <View style={styles.workspace}>
              <Text>Temperature</Text>
              <Input />
              <Text>Button</Text>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
