const { getSearchResultsUnsplash } = require('../../services/unsplashApi')

function getSearchResults (req, res) {
  const { query } = req.params
  const { page = 1 } = req.query
  getSearchResultsUnsplash(query, page)
    .then(data => res.json(data))
    .catch(error => res.json({error}))
}

module.exports = getSearchResults
