const {selectData} = require('./../models/category')

const categoryController = {
    getCategory: async (req, res, next) => {
        let showData = await selectData()
        if (!showData) {
            res.status(400).json({status: 400, message: "data not found"})
        }else{
            res.status(200).json({status: 200, message: "success get all data", data: showData.rows})
        }
    }
}

module.exports = categoryController