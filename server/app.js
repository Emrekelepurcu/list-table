const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080
const carList = require('./car-list')

app.use(cors())

app.get('/car-list', (req, res) => {
  res.send(carList).status(200)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
