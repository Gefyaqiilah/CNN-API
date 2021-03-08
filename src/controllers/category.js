const models = require('../models/index').Category;
const response = require('../helpers/response');

const categoryController = {
  insertCategory: (req, res, next) => {
    const title = req.body.title
    if (!title) {
      return response(res, null, {code:404, status: 'failed'}, 'Title cannot be empty')
    }
    models.create({title: title})
    return response(res, null, {code:200, status: 'succeed'}, null)
  },
  getAllCategories: async(req, res, next) => {
    try {
      const data = await models.findAll({raw: true})
      return response(res, data, {code:200, status: 'succeed'}, null)
    } catch (error) {
      response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
    }
  },
  deleteCategory: async(req, res, next) => {
    const categoryId = req.params.id
    try {
      const checkCategoryIfExist = await models.findAll({ where: { id: categoryId } })
      if (checkCategoryIfExist.length === 0) {
        throw { resultError: 'Data not found', code: 404}
      }
      await models.destroy({ where: { id: categoryId } })
      return response(res, null, {code: 200, status: 'succeed' }, null)
    } catch (error) {
      if (error.resultError) {
        return response(res, null, {code:error.code, status: 'failed'}, error.resultError)
      } else {
        return response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
      }
    }
  },
  updateCategory: async(req, res, next) => {
    const categoryId = req.params.id
    const title = req.body.title

    try {
      if (!title) {
        throw { resultError: 'Title category cannot be empty', code: 404 }
      }
      const checkCategory = await models.findAll({ where: { id: categoryId}, raw: true })
      if (checkCategory.length === 0) {
         throw { resultError: 'Data not found', code: 404 }
      }
      await models.update({ title: title }, { where: { id: categoryId } })
      return response(res, null, {code:200, status: 'succeed'}, null)
    } catch (error) {
      if (error.resultError) {
        return response(res, null, {code:error.code, status: 'failed'}, error.resultError)
      } else {
        return response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
      }
    }
  }
}

module.exports = categoryController