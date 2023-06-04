/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import API from '../../api'
import { Task } from '../../models/Task'
import useLoading, { LoadingState } from '../useLoading'
import useToggle from '../useToggle'

export default function useTasks(): [
  Task[],
  { loadingState: LoadingState; refresh: () => void },
] {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const loading = useLoading()
  const refresher = useToggle()

  async function fetchTasks() {
    loading.start()
    API.tasks
      .getAll()
      .then((response) => {
        setTasks(response)
        loading.success()
      })
      .catch((error) => {
        console.error(error)
        loading.error()
      })
  }

  React.useEffect(() => {
    fetchTasks()
  }, [refresher.active])

  return React.useMemo(
    () => [tasks, { loadingState: loading.state, refresh: refresher.toggle }],
    [loading.state, tasks],
  )
}
