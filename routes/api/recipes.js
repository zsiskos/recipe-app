var express = require('express');
var router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes')

router.get('/', recipesCtrl.index);
router.get('/search', recipesCtrl.search);
router.post('/', recipesCtrl.create);
router.get('/:id', recipesCtrl.showOne);
router.put('/:id', recipesCtrl.update);
router.delete('/:id', recipesCtrl.deleteRecipe);


module.exports = router;