const express = require('express')
const router = express.Router()

const getSearchResults = require('./handlers/getSearchResults')
const addFavorite = require('./handlers/addFavorite')
const getFavorites = require('./handlers/getFavorites')

router.get('/search/:query', getSearchResults)
router.post('/favorites/:favorite_id', addFavorite)
router.get('/favorites', getFavorites)

module.exports = router
