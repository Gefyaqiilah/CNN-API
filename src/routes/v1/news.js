const express = require('express');
const router = express.Router()

const uploadImage = require('../../middlewares/upload');
const {
  insertNews, getAllNews
} = require('../../controllers/news');

router
.post('/', uploadImage('newsImage') ,insertNews )
.get('/', getAllNews)

module.exports = router