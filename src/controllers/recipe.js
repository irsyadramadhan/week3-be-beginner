const {selectData, insertData, updateData, deleteData} = require('./../models/recipe')

const recipeController = {
    postRecipe: async (req, res, next) => {
        let data = {}
        data.title = req.body.title
        data.category_id = req.body.category_id
        data.ingredients = req.body.ingredients
        data.image = req.body.image
        data.by_user_id = req.body.by_user_id
        let result = await insertData(data)
        if (!result) {
            res.status(400).json({status: 400, message: "insert fail"})
        }
        res.status(200).json({status: 200, message: "insert success"})
    },
    getRecipe: async (req, res, next) => {
        let {searchBy, search, sortBy, sort, limit} = req.query
        let data = {
            searchBy: searchBy || 'title',
            search: search || '',
            sortBy: sortBy || 'time_create',
            sort: sort || 'ASC',
            limit: limit || 30
        }
        let showData = await selectData(data)
        if (!showData) {
            res.status(400).json({status: 400, message: "data not found"})
        }else{
            res.status(200).json({status: 200, message: "success get all data", data: showData.rows})
        }
    },
    putRecipe: async (req, res, next) => {
        let id = req.params.id
        let title = req.body.title
        let ingredients = req.body.ingredients
        let data = {title, ingredients}
        let result = await updateData(id, data)
        if (!result) {
            res.status(400).json({status: 400, message: "update fail"})
        }else{
            res.status(200).json({status: 200, message: "update success"})
        }
    },
    delRecipe: async (req, res, next) => {
        let id = req.params.id
        let result = await deleteData(id)
        if (!result) {
            res.status(400).json({status: 400, message: "delete fail"})
        }else{
            res.status(200).json({status: 200, message: "delete success"})
        }
    }
}

module.exports = recipeController