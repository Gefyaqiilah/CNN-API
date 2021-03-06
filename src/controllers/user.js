const models = require('../models/index').User;
const response = require('../helpers/response');
const bcrypt = require('bcrypt');

const userController = {
  getUserById: async(req, res, next) => {
    try {
      const userId = req.params.id
      const userResult = await models.findAll({
        where: {
          id: userId
        }
      })
      if (userResult.length === 0) {
        throw {message: 'Data not found', code: 404}
      }
      return response(res, userResult, {code: '200', status: 'succeed'}, null)
    } catch (error) {
      if (error.code === 404) {
        return response(res, null, { code:error.code, status: 'failed' }, {message: error.message})
      } else {
        return response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
      }
    }
  },
  insertUser: (req, res, next) => {
    const { email, password, firstName } = req.body
    if (!email || !password || !firstName) {
      return response(res, null, {code: 400, status:'failed'}, null)
    }
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(password, salt);

      models.create({ firstName, email, hashPassword: hash })
      return response(res, null, { code:200, status: 'succeed' }, null)
  },
  deleteUser: async(req, res, next) => {
    const userId = req.params.id
    try {
      const checkData = await models.findAll({where: { id: userId }})
      if (checkData.length === 0) {
        throw { code:404, message: 'invalid Id'}
      }
      await models.detroy({
        where: {
          id: userId
        }
      })
      return response(res, null, {code:200, status:'succeed'}, null)
    } catch (error) {
      if (error.code === 404) {
        return response(res, null, {code:error.code,status:'failed'}, error.message)
      } else {
        return response(res, null, {code:500, status: 'failed'}, 'Looks like server having trouble')
      }
    }
  },
  updateUser: async(req, res, next) => {
    const userId = req.params.id
    const {firstName, lastName, gender, bornDate = new Date(), address, phoneNumber, email} = req.body
    const requestData = {
      firstName, lastName, gender, bornDate, address, phoneNumber, email
    }
    const dataUpdate = {}
    const objectKey = Object.keys(requestData)
    for(let i=0; i<objectKey.length; i++) {
      if (requestData[objectKey[i]]) {
        dataUpdate[objectKey[i]] = requestData[objectKey[i]]
      }
    }
    try {
      console.log('dataUpdate :>> ', dataUpdate);
      const data = await models.update({...dataUpdate}, {where: {id: userId}})
      console.log('data :>> ', data);
      response(res, null, {code: 200, status: 'succeed'}, null)
    } catch (error) {
      response(res, null, {code:500, status: 'failed'}, error)
    }
  }
}
module.exports = userController