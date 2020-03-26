var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('./api/index', { title: 'My Recipe Box' });
  });


module.exports = router;