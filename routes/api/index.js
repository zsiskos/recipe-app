var express = require('express');
var router = express.Router();

const recipesRouter = require('./recipes');

router.use('/recipes', recipesRouter);

module.exports = router;