import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import NumberContainer from '../../src/components/numberContainer'
import Card from '../../src/components/card'
import theme from '../../constans/theme'


const generateRandomNumer = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max-min)) + min

    if(randomNumber === exclude){
        return generateRandomNumer(min, max, exclude)
    }else{
        return randomNumber
    }
}

const GameScreen = ({userOptions}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumer(1, 99, userOptions))

  return (
    <View style={styles.container}>
      <Text>La suposicion del Oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
          <Button title='Menor' onPress={() => null} color={theme.colors.secondary}/>
          <Button title='Mayor' onPress={() => null} color={theme.colors.secondary}/>
      </Card>
    </View>
  )
}

export default GameScreen