import express from 'express'

const TaskRoutes = express.Router()

TaskRoutes.get('/task', (req, res) => {
  res.send('ok')
})

export default TaskRoutes
