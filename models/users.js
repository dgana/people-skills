var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  skills: [{
    skill: String,
<<<<<<< HEAD
    value: Number
=======
    value: String
>>>>>>> 110006c73afe9b0b6cb59aa0c76c61e6ef6351fe
  }],
  created_at: Date,
  updated_at: Date
})

var User = mongoose.model('Users', userSchema)

module.exports = User
