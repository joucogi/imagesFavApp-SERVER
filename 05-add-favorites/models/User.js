const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  favorites: [String]
})

module.exports = mongoose.model('User', UserSchema)
