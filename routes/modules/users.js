const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const key = process.env.KEY

router.post('/login', (req, res) => {
  const { email, password } = req.body

  User.findOne({ email }).then(async (user) => {
    if (!user) {
      return res.status(401).send({ error: '用戶不存在' })
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: '密碼錯誤' })
    }

    const token = jwt.sign(
      {
        email,
        username: user.name
      },
      key
    )

    res.send({
      message: '登入成功',
      token
    })
  })
})

router.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const hashPassword = await bcrypt.hash(password, 10)

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).send({ error: '用戶已經存在' })
      } else {
        res.status(201).send({ message: '註冊成功' })
        return User.create({
          name,
          email,
          password: hashPassword
        }).catch((err) => console.log(err))
      }
    })
    .catch((err) => console.log(err))
})

module.exports = router
