const jwt = require('jsonwebtoken')
require('dotenv').config()
const key = process.env.KEY

// 驗證中介軟體
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).send({ error: '未登入' })
  }

  jwt.verify(token, key, (err, _user) => {
    if (err) {
      return res.status(403).send({ error: '驗證錯誤' })
    }
    next()
  })
}

module.exports = authenticateToken
