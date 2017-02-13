var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  skills: [{
    skill: String,
    value: String
  }],
  created_at: Date,
  updated_at: Date
})

var User = mongoose.model('Users', userSchema)

module.exports = User
