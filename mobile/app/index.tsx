import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import useTasks from '../src/hooks/async/useTasks'

export default function App() {
  const [tasks] = useTasks()

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      {tasks.map((task) => (
        <View key={task.id}>
          <Text style={{ color: 'white' }}>{task.label}</Text>
          <Text style={{ color: 'white' }}>{task.description}</Text>
        </View>
      ))}
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
