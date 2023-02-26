const express = require('express')
const router = express.Router()
const Users = require('./users')
const Recipe = require('./recipe')
const Category = require('./category')

router.use('/users', Users)
router.use('/recipe', Recipe)
router.use('/category', Category)

module.exports = router