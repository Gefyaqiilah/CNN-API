const express = require('express');
const router = express.Router()

const {
  insertTag, deleteTag
} = require('../../controllers/tag')

router
.post('/', insertTag)
.delete('/:id', deleteTag)

module.exports = router