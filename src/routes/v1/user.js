const express = require('express');
const router = express.Router()
const uploadMulter = require('../../middlewares/uploadImage');
const {
  getUserById, insertUser, deleteUser, updateUser, updateFotoProfile
} = require('../../controllers/user');

router
.get('/:id', getUserById)
.post('/', insertUser)
.delete('/:id', deleteUser)
.patch('/:id', updateUser)
.patch('/edit-foto-profile/:id', uploadMulter.single('fotoProfile'), updateFotoProfile)

module.exports = router