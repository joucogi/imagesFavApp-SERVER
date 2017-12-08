const express = require('express')
const router = express.Router()

const getSearchResults = require('./handlers/getSearchResults')
const addFavorite = require('./handlers/addFavorite')

router.get('/search/:query', getSearchResults)
router.post('/favorite/:favorite_id', addFavorite)

module.exports = router
