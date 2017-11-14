const express = require('express')
const router = express.Router()

const getSearchResults = require('./handlers/getSearchResults')

router.get('/search/:query', getSearchResults)

module.exports = router
