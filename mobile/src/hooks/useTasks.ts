import React from 'react'
import api from '../lib/api'
import { Task } from '../models/Task'

export default function useTasks() {
  const [tasks, setTasks] = React.useState<Task[]>([])

  async function fetchTasks() {
    api
      .get('/tasks')
      .then(({ data }) => setTasks(data))
      .catch((error) => console.error(error))
  }

  React.useEffect(() => {
    fetchTasks()
  }, [])

  return tasks
}
