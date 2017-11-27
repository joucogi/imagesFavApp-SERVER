const { getSearchResults } = require('../../services/unsplashApi')

function _getSearchResults (req, res) {
  const { query } = req.params
  const { page = 1 } = req.query
  getSearchResults(query, page)
    .then(data => res.json(data))
    .catch(error => res.json({error}))
}

module.exports = _getSearchResults
