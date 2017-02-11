var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  skills: [{
    skill: {
      type: String,
      unique: true
    },
    value: Number
  }],
  created_at: Date,
  updated_at: Date
})

var User = mongoose.model('Users', userSchema)

module.exports = User
