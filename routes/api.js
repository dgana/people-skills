var express = require('express')
var router = express.Router()
var controller = require('../controllers/users')

router.post('/seed', controller.seed)

module.exports = router;
