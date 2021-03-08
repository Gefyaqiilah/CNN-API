const express = require('express');
const router = express.Router()

const user = require('./user');
const category = require('./category');
const tag = require('./tag');

router.use('/user', user)
router.use('/category', category)
router.use('/tag', tag)

module.exports = router