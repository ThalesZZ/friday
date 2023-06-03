import express from 'express'
import TaskRoutes from './routes/TaskRoutes'

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.send('Server is up!')
})

app.use(TaskRoutes)

app.listen(PORT, () => {
  console.log('Server is up on port: ' + PORT)
})
