const Recipe = require('../../models/recipe')

module.exports = {
    index,
    show,
    newRecipe,
    create,
    showOne,
    update,
    deleteRecipe,
};

function index(res, res) {
    Recipe.find({}, function(err, recipe) {
        res.render('recipes/index', {title: 'All recipes'});
    });
}

function show(res, res) {
    console.log('recipe.show works!')
};

function newRecipe(res, res) {
    console.log('recipe.newRecipe works!')
};

function create(res, res) {
    console.log('recipe.newRecipe works!')
};

function showOne(res, res) {
    console.log('recipe.show works!')
};

function update(res, res) {
    console.log('recipe.update works!')
};
function deleteRecipe(res, res) {
    console.log('recipe.deleteRecipe works!')
};