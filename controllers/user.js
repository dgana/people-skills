const seedData = require('../seeder/users')
const Users = require('../models')
const mongoose = require('mongoose')

module.exports = {
  seed: function(req,res){
    res.send('seeded')
  }
}
