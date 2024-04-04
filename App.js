import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNum, setUserNum] = useState(null)

  function pickedNumberHandler(pickedNum){
    setUserNum(pickedNum)
  }

  let screen = <StartGameScreen onPick={pickedNumberHandler}/>

  if(userNum){
    screen = <GameScreen userNum={userNum}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
       style={styles.rootScreen} 
       source={require('./assets/images/background.png')}
        imageStyle={styles.backgroundImage}
         resizeMode='cover'>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
