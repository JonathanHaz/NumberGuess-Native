import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/NumberContainer";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

function GameScreen({ userNum }) {
    
    const initialGuess = generateRandomBetween(1, 100, userNum)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
  return (
    <View style={styles.screen}>
        <Title>AI Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower?</Text>
            {/* +
            - */}
        </View>
        <View>
            {/* Logs */}
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 20
    },
 
})