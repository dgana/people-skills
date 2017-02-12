const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.post('/seed', controller.seed)
router.post('/', controller.add)
router.get('/', controller.readAll)
router.get('/:id', controller.readOne)
router.delete('/:id', controller.delete)

module.exports = router;
