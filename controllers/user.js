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
  add: (req,res) => {
    let objSkill = req.body.skills
    Users.create({
      name: req.body.name,
      {
        $push: {
          skills: {
            $each: objSkill,
            $sort: {
              value: -1
            },
            $slice: objSkill.length
          }
        }
      }
      created_at: new Date(),
      updated_at: new Date()
    }, (err, user) => {
      if (err) throw err
      res.json(user)
    })
  }, // [{skill: 'eat', value: 100}, {skill: 'sleep', value: 50}]
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
