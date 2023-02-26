const express = require('express')
const router = express.Router()
const {getRecipe, postRecipe, putRecipe, delRecipe} = require('./../controllers/recipe')

router.get('/', getRecipe)
router.post('/', postRecipe)
router.put('/:id', putRecipe)
router.delete('/:id', delRecipe)

module.exports = router