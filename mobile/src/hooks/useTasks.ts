import React from 'react'
import api from '../lib/api'
import { Task } from '../models/Task'
import useLoading from './useLoading'

export default function useTasks() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const loading = useLoading()

  async function fetchTasks() {
    loading.start()
    api
      .get('/tasks')
      .then(({ data }) => {
        setTasks(data.map(Task.fromDTO))
        loading.success()
      })
      .catch((error) => {
        console.error(error)
        loading.error()
      })
  }

  React.useEffect(() => {
    fetchTasks()
  }, [])

  return React.useMemo(() => [tasks, loading.state], [])
}
