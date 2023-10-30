const express = require('express')
const router = express.Router()
const authenticateToken = require('../auth/auth')

// 引用
const users = require('./modules/users')
const completion = require('./modules/openai')
const logs = require('./modules/logs')

// use
router.use('/users', users)
router.use('/openai', authenticateToken, completion)
router.use('/logs', authenticateToken, logs)

// export
module.exports = router
