const mongoose = require('mongoose')
const seedData = require('../seeder/users')
const Users = require('../models/users')

module.exports = {
  seed: function(req,res){
    // Drop all collections
    mongoose.connection.db.dropCollection('users', (err, result) => {
      if (err) throw err;
      console.log('Dropped collection Users!')
    })

    Users.create(seedData, (err, users) => {
      if (err) throw err
      res.json(users)
    })
  }
}
