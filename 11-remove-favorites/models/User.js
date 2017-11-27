const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  user_id: String,
  favorites: [String]
})

module.exports = mongoose.model('User', UserSchema)