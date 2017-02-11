const mongoose = require('mongoose')
const Users = require('../models/users')
const seedUsers = require('../seeder/users')

module.exports = {
  seed: (req, res) => {
    mongoose.connection.db.dropCollection('users', (err, result) => {
      if (err) throw err
      console.log('Dropped collection: users');
    })

    Users.create(seedUsers, (err, users) => {
      if (err) throw err
      res.json(users)
    })
  },
  readAll: (req, res) => {
    Users.find({}, (err, users) => {
      if (err) throw err
      res.json(users)
    })
  },
  readOne: (req, res) => {
    Users.findById(req.params.id, (err, user) => {
      if (err) throw error
      res.json(user)
    })
  },
  delete: (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) throw error
      res.json(user)
    })
  }
}
