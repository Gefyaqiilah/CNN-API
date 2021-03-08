const models = require('../models/index').Tag;
const response = require('../helpers/response');

const tagController = {
  insertTag: async(req, res, next) => {
    const title = req.body.title
    try {
      if (!title) {
        throw { resultError: 'Title cannot be empty', code: 400 }
      }
      await models.create({ title: title })
      return response(res, null, {code:200, status: 'succeed'}, null)
    } catch (error) {
      if (error.resultError) {
        return response(res, null, {code:error.code, status: 'failed'}, error.resultError)
      } else {
        return response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
      }
    }
  },
  deleteTag: async(req, res, next) => {
    const tagId = req.params.id
    try {
      const checkTagIfExist = await models.findAll({ where: { id: tagId }})
      if (checkTagIfExist.length === 0) {
        throw { resultError: 'Data not found', code: 404 }
      }
      await models.destroy({ where: { id: tagId }})
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

module.exports = tagController