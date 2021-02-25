const express = require('express')
const router = express.Router()

// health check API endpoint
router.get('/health', require('./health'))

module.exports = router