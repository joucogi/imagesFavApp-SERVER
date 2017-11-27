const { addFavorite } = require('../../services/unsplashApi')

function _addFavorite (req, res) {
  const { user_id } = req.body
  const { favorite_id } = req.params

  addFavorite(user_id, favorite_id)
    .then(() => res.json({ msg: `favorite added to the user` }))
}

module.exports = _addFavorite
