import { View, Text} from 'react-native'
import {styles} from './styles'

const index = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{title}</Text>
    </View>
  )
}


export default index