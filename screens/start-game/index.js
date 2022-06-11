import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles'
import Card from '../../src/components/card'
import theme from '../../constans/theme'
import Input from '../../src/components/input/index'
import NumberContainer from '../../src/components/numberContainer'


const StartGame = ({onStartGame}) => {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const onHandleChangeText = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''))
  }

  const onHandleReset = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const onHandleConfirm = () => {
    const chosenNumber = parseInt(enteredValue)
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return

    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
  }

  const confirmedOutput = confirmed ? 
    <Card style={styles.inputContainer}>
      <Text>Tu Seleccion: </Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title='Empezar juego' onPress={() => onStartGame(selectedNumber)} color={theme.colors.secondary}/>
    </Card> 
    : 
    null

  return (
    <TouchableWithoutFeedback
      onPress={() => {Keyboard.dismiss()}}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.subtitle}>Elija un numero</Text>
          <Input
            placeholder='1'
            keyboardType='numeric'
            maxLength={2}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            placeholderTextColor={theme.colors.placeholder}
            style={styles.input}
            value={enteredValue}
            onChangeText={(text) => onHandleChangeText(text)}
          />
          <View style={styles.btnContainer}>
              <Button 
                onPress={() => onHandleReset()} 
                color={theme.colors.secondary} 
                title='Limpiar'
              />
              <Button 
                onPress={() => onHandleConfirm()} 
                color={theme.colors.secondary} 
                title='Confirmar'
              />
          </View>

          

        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGame