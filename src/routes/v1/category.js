const express = require('express')
const router = express.Router()

const { 
  insertCategory, getAllCategories, deleteCategory, updateCategory
} = require('../../controllers/category');

router
.post('/', insertCategory)
.get('/', getAllCategories)
.delete('/:id', deleteCategory)
.patch('/:id', updateCategory)

module.exports = router