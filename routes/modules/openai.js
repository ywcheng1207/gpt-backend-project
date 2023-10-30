//
const express = require('express')
const OpenAI = require('openai')
const { jwtDecode } = require('jwt-decode')
const router = express.Router()
require('dotenv').config()
const ChatLog = require('../../models/chatlog')

//
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// router
router.post('/completions', async (req, res) => {
  const Token = req.headers.authorization
  const { theChatId, UserMessage } = req.body
  const { email } = jwtDecode(Token)

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: UserMessage }],
      model: 'gpt-3.5-turbo',
      max_tokens: 100
    })
    res.status(200).send({ message: 'chat !', completion })

    // 新增user發送的訊息
    ChatLog.create({
      userEmail: email,
      chatId: theChatId,
      role: 'user',
      message: UserMessage,
      promptTokens: completion.usage.prompt_tokens
    }).catch((err) => console.log(err))

    // 新增chatgpt回傳的訊息
    ChatLog.create({
      userEmail: email,
      chatId: theChatId,
      role: 'assistant',
      message: completion.choices[0].message.content,
      completionTokens: completion.usage.completion_tokens
    }).catch((err) => console.log(err))
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

module.exports = router
