// 套件
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()
const PORT = process.env.PORT

//
require('./config/mongoose')
const app = express()

// use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

// listen
app.listen(PORT, () => {
  console.log('Server is running on PORT: ' + PORT)
})
