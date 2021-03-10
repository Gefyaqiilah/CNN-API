const express = require('express');
const router = express.Router()
const uploadImage = require('../../middlewares/upload');
const {
  getUserById, insertUser, deleteUser, updateUser, updateFotoProfile
} = require('../../controllers/user');

router
.get('/:id', getUserById)
.post('/', insertUser)
.delete('/:id', deleteUser)
.patch('/:id', updateUser)
.patch('/edit-foto-profile/:id', uploadImage('fotoProfile'), updateFotoProfile)

module.exports = router