const express = require('express');
const router = express.Router()

const uploadImage = require('../../middlewares/upload');
const {
  insertNews
} = require('../../controllers/news');

router
.post('/', uploadImage('newsImage') ,insertNews )

module.exports = router