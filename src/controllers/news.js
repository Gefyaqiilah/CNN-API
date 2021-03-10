const response = require('../helpers/response');
const models = require('../models/index').News;
const newsController = {
  insertNews: async(req, res, next) => {
    const {
      authorId, title, content,
      topByCategory, topByNews, categoryId, imageDesc
    } = req.body

    const objForCheckData = {
      authorId, title, content,
      topByCategory, topByNews,
      categoryId, imageDesc
    }
    const keyNames = Object.keys(objForCheckData)
    const newsData = {}
    for (let i=0; i<keyNames.length; i++) {
      if(objForCheckData[keyNames[i]] !== null && objForCheckData[keyNames[i]] !== undefined) {
        newsData[keyNames[i]] = objForCheckData[keyNames[i]]
      } else {
        return response(res, null, {code: 200, status: 'success'}, `${keyNames[i]} cannot be null`)
      }
    }
    try {
      if (!req.file) {
        throw { resultError: 'Image cannot be empty', code: 404 }
      } 
      await models.create({ ...newsData, imageUrl: `${process.env.BASE_URL}/images/${req.file.filename}` })
      return response(res, null, {code: 200, status: 'success'}, null)
    } catch (error) {
      if (error.resultError) {
        response(res, null, {code:error.code, status: 'failed'}, error.resultError)
      } else {
        response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
      }
    }
    response(res, newsData, { code: 200,status:'success'}, null)
  }
}

module.exports = newsController