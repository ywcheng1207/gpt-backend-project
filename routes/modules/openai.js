const express = require('express')
const OpenAI = require('openai')
const router = express.Router()
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

router.post('/completions', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: req.body.message }],
      model: 'gpt-3.5-turbo',
      max_tokens: 100
    })
    res.status(200).send({ message: 'chat !', completion })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

module.exports = router
