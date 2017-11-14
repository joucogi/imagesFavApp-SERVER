const User = require('../../models/User')

function addFavorite (req, res) {
  const { user_id } = req.body
  const { favorite_id } = req.params

  User.findOneAndUpdate(
    { user_id },
    {
      $push: { favorites: favorite_id }
    }
  ).then(() => res.json({ msg: `favorite added to the user` }))
}

module.exports = addFavorite
