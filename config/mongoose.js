const mongoose = require('mongoose')

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// mongodb
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

// 異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db
