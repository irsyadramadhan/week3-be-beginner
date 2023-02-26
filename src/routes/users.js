const express = require('express')
const nameChecker = require('../middleware/nameChecker')
const router = express.Router()
const {getData, getDataById, postData, putData, delData} = require('./../controllers/users')

router.get('/', getData)
router.get('/:id', getDataById)
router.post('/', nameChecker, postData)
router.put('/:id', putData)
router.delete('/:id', delData)

module.exports = router