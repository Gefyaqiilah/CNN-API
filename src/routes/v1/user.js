const express = require('express');
const router = express.Router()

const {
  getUserById, insertUser, deleteUser, updateUser
} = require('../../controllers/user');

router
.get('/:id', getUserById)
.post('/', insertUser)
.delete('/:id', deleteUser)
.patch('/:id', updateUser)

module.exports = router