import express from 'express'

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.send('Server is up!')
})

app.listen(PORT, () => {
  console.log('Server is up on port: ' + PORT)
})
