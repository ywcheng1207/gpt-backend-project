const express = require('express')
const router = express.Router()

// 引用
const users = require('./modules/users')

// use
router.use('/users', users)

// export
module.exports = router
