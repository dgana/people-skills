const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.post('/seed', controller.seedKey, controller.seed)
router.post('/', controller.add)
router.get('/', controller.readAll)
router.get('/:id', controller.readOne)
router.delete('/:id', controller.delete)
router.put('/:id', controller.updateSkills)
router.put('/add_skill/:id', controller.addSkills)
router.put('/remove_skill/:id', controller.removeSkill)

module.exports = router
