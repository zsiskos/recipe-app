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
    Recipe.find({}, function(err, recipes) {
        res.status(200).json(recipes);
        // res.render('recipes/index', {title: 'All recipes'});
    });
};

function show(res, res) {
    console.log('recipe.show works!')
};

function newRecipe(res, res) {
    res.render('recipes/new', {title: 'Add recipe'});
};

function create(res, res) {
    //need to insert the user creating it
    let recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('api/recipes/new');
        res.redirect(`api/recipe/${recipe._id}`)
    });
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
