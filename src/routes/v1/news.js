const express = require('express');
const router = express.Router()

const uploadImage = require('../../middlewares/uploadImage');

const {
  insertNews
} = require('../../controllers/news');

router
.post('/', uploadImage.single('newsImage') ,insertNews )

module.exports = router