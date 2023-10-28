// 套件
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

//
require('./config/mongoose')
const app = express()

// use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

// listen
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
