import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import useTasks from './src/hooks/useTasks'
import { LoadingState } from './src/hooks/useLoading'

export default function App() {
  const [tasks, loadingTasksState] = useTasks()

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      <Text style={{ color: 'white' }}>
        {loadingTasksState === LoadingState.LOADING
          ? 'loading...'
          : JSON.stringify(tasks)}
      </Text>
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
