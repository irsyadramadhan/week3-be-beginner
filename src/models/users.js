const Pool = require('./../config/db')

const selectData = () => {
    return Pool.query(
        'SELECT * FROM users'
    )
}

const insertData = (value) => {
    return Pool.query(
        `INSERT INTO users (name) VALUES ('${value}')`
    )
}

const selectDataBy = (by, value) => {
    return Pool.query(
        `SELECT * FROM users WHERE ${by} = '${value}'`
    )
}

const selectDataById = (value) => {
    return Pool.query(
        `SELECT * FROM users WHERE id = ${value}`
    )
}

const updateData = (id, value) => {
    return Pool.query(
        `UPDATE users SET name = '${value}' WHERE id = ${id}`
    )
}

const deleteData = (id) => {
    return Pool.query(
        `DELETE FROM users WHERE id = ${id}`
    )
}

module.exports = {selectData, insertData, selectDataBy, selectDataById, updateData, deleteData}