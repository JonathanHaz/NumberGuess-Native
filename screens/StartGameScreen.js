import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";


export default function StartGameScreen({onPick}) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(e){
        setEnteredNumber(e)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!','Number has to be between 1-99.',
            [{text: 'Understood', style:'destructive', onPress: resetInputHandler}])
            return;
        }
        onPick(chosenNumber);
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
        keyboardType="number-pad" maxLength={2}
         value={enteredNumber}
         onChangeText={numberInputHandler}
         />

        <View style={styles.buttonsContainer}>
         <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
         </View>
         <View style={styles.buttonContainer}>
             <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
         </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
 inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    //IOS
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
 },
 numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
 },
 buttonsContainer:{
    flexDirection: 'row'
 },
 buttonContainer: {
    flex: 1
 }
});

