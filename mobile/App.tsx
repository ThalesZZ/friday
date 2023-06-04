import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import useTasks from './src/hooks/useTasks'

export default function App() {
  const tasks = useTasks()

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      <Text style={{ color: 'white' }}>{JSON.stringify(tasks)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
