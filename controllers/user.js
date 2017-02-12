const mongoose = require('mongoose')
const Users = require('../models/users')
const seedUsers = require('../seeder/users')

module.exports = {
  seed: (req, res) => {
    mongoose.connection.db.dropCollection('users', (err, result) => {
      if (err) throw err
      console.log('Dropped collection: users')
    })

    Users.create(seedUsers, (err, users) => {
      if (err) throw err
      res.json(users)
    })
  },
  add: (req, res) => {
    let objSkill = JSON.parse(req.body.skills)
    let getSkill = objSkill.map((user, index) => {
      return user.skill
    })
    function checkDuplicate (getSkill) {
      return getSkill.length === new Set(getSkill).size
    }
    if (checkDuplicate(getSkill)) {
      Users.create({
        name: req.body.name,
        skills: objSkill,
        created_at: new Date(),
        updated_at: new Date()
      }, (err, user) => {
        if (err) throw err
        res.json(user)
      })
    } else {
      res.json({msg: 'You cannot have a duplicate skill!' })
    }
  }, // [{"skill":"eat", "value": 100},{"skill":"sleep","value": 50}]
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
  },
  updateSkills: (req, res) => {
    let objSkill = JSON.parse(req.body.skills)
    Users.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        skills: objSkill,
        updated_at: new Date()
      },
      {
        new: true
      }, (err, result) => {
        if (err) throw err
        res.json(result)
      })
  },
  addSkills: (req, res) => {
    let objSkill = JSON.parse(req.body.skills)
    Users.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          skills: {
            $each: objSkill,
            $sort: {
              value: -1
            }
          }
        }
      }, {new: true}, (err, result) => {
        if (err) throw err
        res.json(result)
      })
  },
  removeSkill: (req, res) => {
    Users.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          skills: {
            skill: req.body.skill
          }
        }
      }, {new: true}, (err, result) => {
        if (err) throw err
        res.json(result)
      })
  },
  seedKey: (req, res, next) => {
    if (req.header('auth') === 'admin123') {
      next()
    } else {
      res.send('You dont have access!')
    }
  }
}
