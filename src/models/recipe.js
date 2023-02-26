const Pool = require('./../config/db')

// JOIN - SORT - ILIKE - LIMIT
const selectData = (value) => {
    let {searchBy, search, sortBy, sort, limit} = value
    return Pool.query(
        `SELECT recipe.id, recipe.title, recipe_category.name AS category, recipe.ingredients, users.name AS creator, recipe.time_create
        FROM recipe
        JOIN recipe_category
        ON recipe.category_id = recipe_category.id
        JOIN users
        ON recipe.by_user_id = users.id
        WHERE recipe.isdelete IS NULL AND recipe.${searchBy} ILIKE '%${search}%'
        ORDER BY recipe.${sortBy} ${sort} LIMIT ${limit}`
    )
}

const insertData = (value) => {
    let {title, category_id, ingredients, image, by_user_id} = value
    return Pool.query(
        `INSERT INTO recipe (title, category_id, ingredients, image, by_user_id) VALUES ('${title}', ${category_id}, '${ingredients}', '${image}', ${by_user_id})`
    )
}

const updateData = (id, value) => {
    let {title, ingredients} = value
    return Pool.query(
        `UPDATE recipe SET title = '${title}', ingredients = '${ingredients}' WHERE id = ${id}`
    )
}

const deleteData = (id) => {
    return Pool.query(
        `UPDATE recipe SET isdelete = current_time WHERE id = ${id}`
    )
}

module.exports = {selectData, insertData, updateData, deleteData}