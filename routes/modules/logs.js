const express = require('express')
const router = express.Router()
const { jwtDecode } = require('jwt-decode')
const ChatLog = require('../../models/chatlog')

// 取得該位使用者的所有chatlog
router.get('/', (req, res) => {
  const Token = req.headers.authorization
  const { email } = jwtDecode(Token)
  ChatLog.find({ userEmail: email })
    .lean()
    .then((data) => res.send(data))
    .catch((error) => console.log(error))
})

// 取得該位使用者的談話紀錄清單
router.get('/chat-list', (req, res) => {
  const Token = req.headers.authorization
  const { email } = jwtDecode(Token)

  ChatLog.find({ userEmail: email })
    .lean()
    .sort({ _id: 1 })
    .then((data) => {
      const chatIdGroups = {}
      data.forEach((entry) => {
        const { chatId } = entry
        if (!chatIdGroups[chatId]) {
          chatIdGroups[chatId] = [entry]
        }
      })
      const result = Object.values(chatIdGroups).map((group) => {
        return {
          chatId: group[0].chatId,
          message: group[0].message
        }
      })
      res.status(200).send(result)
    })
    .catch((error) => console.log(error))
})

// 取得該位使用者的某一組chatlog包含的所有logs
router.get('/:id', (req, res) => {
  const id = req.params.id
  const Token = req.headers.authorization
  const { email } = jwtDecode(Token)

  ChatLog.find({ userEmail: email, chatId: id })
    .lean()
    .then((data) => res.send(data))
    .catch((error) => console.log(error))
})

// 刪除該位使用者的某一組chatlog
router.delete('/:id', (req, res) => {
  const id = req.params.id
  const Token = req.headers.authorization
  const { email } = jwtDecode(Token)

  ChatLog.deleteMany({ userEmail: email, chatId: id })
    .then(() => res.send('刪除成功'))
    .catch((error) => console.log(error))
})

module.exports = router
