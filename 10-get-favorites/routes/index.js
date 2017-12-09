const express = require('express')
const router = express.Router()

const getSearchResults = require('./handlers/getSearchResults')
const addFavorite = require('./handlers/addFavorite')
const getFavorites = require('./handlers/getFavorites')

router.get('/search/:query', getSearchResults)
router.post('/favorite/:favorite_id', addFavorite)
router.delete('/favorite/:favorite_id', removeFavorite)
router.get('/favorites', getFavorites)

module.exports = router
