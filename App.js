import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import GameScreen from './screens/game';
import StartGameScreen from './screens/start-game';
import { useFonts } from 'expo-font';
import { colors } from "./constants/colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // fontFamily: 'Lato-Bold',
  },
});


export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const  title = !userNumber ?  'Aprox-Number' : 'Adivina un numero';
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });
  
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={onStartGame} />
  if(!loaded) return null;
  // console.warn(userNumber);
  if(userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }
  
  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}