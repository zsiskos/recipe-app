var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/api/user')


router.get('/', userCtrl.index);

module.exports = router;