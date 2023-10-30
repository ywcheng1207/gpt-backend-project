const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatLogSchema = new Schema({
  userEmail: {
    type: String,
    required: true
  },
  chatId: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  promptTokens: {
    type: Number
  },
  completionTokens: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('ChatLog', chatLogSchema)
