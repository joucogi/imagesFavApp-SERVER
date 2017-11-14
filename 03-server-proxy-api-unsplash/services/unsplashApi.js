const rp = require('request-promise')
const { UNSPLASH_BASE_URL, UNSPLASH_CLIENT_ID } = process.env

function getSearchResultsUnsplash (query, page) {
  const urlBase = `${UNSPLASH_BASE_URL}/search/photos/`
  const queryParams = `?query=${query}&client_id=${UNSPLASH_CLIENT_ID}&page=${page}&per_page=100`
  console.log(`🔎 requesting ${urlBase + queryParams}`)
  return rp(urlBase + queryParams, { json: true })
}

module.exports = { getSearchResultsUnsplash }
