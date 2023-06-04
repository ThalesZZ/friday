import axios from 'axios'
import { Task, TaskDTO } from '../models/Task'

const api = axios.create({ baseURL: 'http://192.168.0.20:3000' })

const API = {
  tasks: {
    getAll: async (): Promise<Task[]> =>
      api.get<TaskDTO[]>('/tasks').then((r) => r.data.map(Task.fromDTO)),
  },
}

export default API
