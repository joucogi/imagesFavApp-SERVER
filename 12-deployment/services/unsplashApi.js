const getAndCache = require('../utils/getAndCache')
const { UNSPLASH_BASE_URL, UNSPLASH_CLIENT_ID } = process.env
const User = require('../models/User')

const getDetailPhotoUrl = idPhoto =>
`${UNSPLASH_BASE_URL}/photos/${idPhoto}?client_id=${UNSPLASH_CLIENT_ID}`

function getSearchResults (query, page) {
  const urlBase = `${UNSPLASH_BASE_URL}/search/photos/`
  const queryParams = `?query=${query}&client_id=${UNSPLASH_CLIENT_ID}&page=${page}&per_page=100`
  return getAndCache(urlBase + queryParams)
}

function addFavorite (user_id, favorite_id) {
  return User.findOneAndUpdate(
    { user_id },
    {
      $push: { favorites: favorite_id }
    }
  )
}

function removeFavorite (user_id, favorite_id) {
  return User.findOneAndUpdate(
    { user_id },
    {
      $pull: { favorites: favorite_id }
    }
  )
}

function getFavorites (user_id) {
  return User.findOne({ user_id })
            .then( ({ favorites }) => favorites.map( idPhoto => getDetailPhotoUrl(idPhoto)) )
            .then( urls => Promise.all( urls.map( url => getAndCache(url)) ) )
}

module.exports = { getSearchResults, addFavorite, removeFavorite, getFavorites }
