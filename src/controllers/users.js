const {selectData, insertData, selectDataBy, selectDataById, updateData, deleteData} = require('./../models/users')

const usersController = {
    getData: async (req, res, next) => {
        let showData = await selectData()
        if (!showData) {
            res.status(400).json({status: 400, message: "data not found"})
        }else{
            res.status(200).json({status: 200, message: "success get all data", data: showData.rows})
        }
    },
    getDataById: async (req, res, next) => {
        let id = req.params.id
        let showDataById = await selectDataById(id)
        if (!showDataById) {
            res.status(400).json({status: 400, message: "data not found"})
        }else{
            res.status(200).json({status: 200, message: "success get data by id", data: showDataById.rows})
        }
    },
    postData: async (req, res, next) => {
        let body = req.body
        let input = await insertData(body.name)
        if (!input) {
            res.status(400).json({status: 400, message: "data input incorrect"})
        }
        let checkData = await selectDataBy('name', body.name)
        if(!checkData) {
            res.status(400).json({status: 400, message: "data not found"})
        }
        res.status(200).json({status: 200, message: "success post data", data: checkData.rows})
    },
    putData: async (req, res, next) => {
        let id = req.params.id
        let name = req.body.name
        let result = await updateData(id, name)
        if (!result) {
            res.status(400).json({status: 400, message: "update fail"})
        }
        let checkData = await selectDataBy('id', id)
        if(!checkData) {
            res.status(400).json({status: 400, message: "data not found"})
        }
        res.status(200).json({status: 200, message: "update success", data: checkData.rows})
    },
    delData: async (req, res, next) => {
        let id = req.params.id
        let result = await deleteData(id)
        if (!result) {
            res.status(400).json({status: 400, message: "delete fail"})
        }
        res.status(200).json({status: 200, message: "delete success", data: `id ${id} is deleted`})
    }
}

module.exports = usersController