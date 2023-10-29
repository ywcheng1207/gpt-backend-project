const express = require('express')
const router = express.Router()
const authenticateToken = require('../auth/auth')

// 引用
const users = require('./modules/users')
const completion = require('./modules/openai')

// use
router.use('/users', users)
router.use('/openai', authenticateToken, completion)

// export
module.exports = router
