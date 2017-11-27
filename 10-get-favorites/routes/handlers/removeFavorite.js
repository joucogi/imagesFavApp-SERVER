const { removeFavorite } = require('../../services/unsplashApi')

function _removeFavorite (req, res) {
  const { user_id } = req.headers
  const { favorite_id } = req.params

  removeFavorite(user_id, favorite_id)
    .then(() => res.json({ msg: `favorite removed from the user` }))
}

module.exports = _removeFavorite
