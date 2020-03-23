var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/api/user')


router.get('/', userCtrl.index);
router.get('/:name', userCtrl.showOne);
router.post('/', userCtrl.create);
router.get('/:name/myRecipes', userCtrl.myRecipes);
router.get('/:name/savedRecipes', userCtrl.savedRecipes);

module.exports = router;