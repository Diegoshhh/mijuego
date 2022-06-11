import {ActivityIndicator, View } from 'react-native';
import {styles} from './styles'
import Header from './src/components/header'
import StartGame from './screens/start-game';
import GameScreen from './screens/game-screen';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import theme from './constans/theme';



export default function App() {
  // const {loaded} = useFonts({
  //   "open-sans":require('./assets/fonts/OpenSans-Regular.ttf'),
  //   "open-sans-bold":require('./assets/fonts/OpenSans-Bold.ttf'),
  //   "open-sans-semibold":require('./assets/fonts/OpenSans-SemiBold.ttf')
  // })
  const [userNumber, setUserNumber] = useState()

  // if(loaded){
  //   return <ActivityIndicator size='large' color={theme.colors.primary}/>
  // }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGame onStartGame={onStartGame}/>

  if(userNumber){
    content = <GameScreen userOptions={userNumber}/>
  }

  return (
    <View style={styles.container}>
      <Header title='Adivina el numero'/>
      {content}
    </View>
  );
}





