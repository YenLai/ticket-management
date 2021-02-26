const express = require('express')
const router = express.Router()
const dynamodb = require('../models/databse/dynamodb')

// health check API endpoint
router.get('/health', require('./health'))

router.post('/listTables', require('./dynamodb').listTables)
router.post('/createTable', require('./dynamodb').createTable)
router.post('/deleteTable', require('./dynamodb').deleteTable)

module.exports = router