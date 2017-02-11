var express = require('express')
var router = express.Router()
var controller = require('../controllers/user')

router.post('/seed', controller.seed)

module.exports = router;
