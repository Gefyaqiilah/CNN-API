require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const response = require('./src/helpers/response');

const PORT = process.env.PORT || 4000

const app = express()
// using middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// grouping endpoint
const routes = require('./src/routes/index');
app.use('/api', routes)

// global endpoint
app.use('*', (req, res, next) => {
  return res.json({message: 'wrong endpoint'})
})

// error handlers
app.use((err, req, res, next) => {
  return response(res, null, {code: err.statusCode, status: err.status}, err.message)
})

// run server
app.listen(PORT, ()=> console.log('Server running on PORT: ' + PORT))