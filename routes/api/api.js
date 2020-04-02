var express = require('express');
var router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes')
const userCtrl = require('../../controllers/api/user')


router.get('/', function(req, res, next) {
    res.render('./api/index', { title: 'My Recipe Box' });
  });

router.get('/recipes', recipesCtrl.index);
router.get('/recipes/search', recipesCtrl.search);
router.get('/recipes/:id', recipesCtrl.showOne);

//MUST BE LOGGED IN TO DO
router.post('/recipes/new', recipesCtrl.create);
router.put('/recipes/:id', recipesCtrl.update);
router.delete('/recipes/:id', recipesCtrl.deleteRecipe);
router.post('/recipes/:id', recipesCtrl.saveToList);
router.post('/recipes/:id/comments/', recipesCtrl.createComment);
router.delete('/recipes/:id/comments/:id', recipesCtrl.deleteComment);


router.get('/users', userCtrl.index);
router.get('/:userName', userCtrl.showOne);
router.post('/users', userCtrl.create);
router.get('/:userName/myRecipes', userCtrl.myRecipes);
router.get('/:userName/savedRecipes', userCtrl.savedRecipes);


module.exports = router;