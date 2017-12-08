const { getFavorites } = require('../../services/unsplashApi')

function _getFavorites (req, res) {
  const { user_id } = req.headers
  getFavorites(user_id)
    .then(data => res.json(data))
    .catch(error => res.json({error}))
}

module.exports = _getFavorites
