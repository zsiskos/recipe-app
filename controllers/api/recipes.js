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

function index(req, res) {
    Recipe.find({})
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};

function show(req, res) {
    console.log('recipe.show works!')
};

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add recipe'});
};

function create(req, res) {
    //need to insert the user creating it
    Recipe.create(req.body)
        .then(recipeCreated => {
            res.json(recipeCreated);
        })
        .catch(err => {
            if (err) return res.redirect('api/recipes/new');
        res.redirect(`api/recipe/${recipe._id}`)
    });
};

function showOne(req, res) {
    Recipe.findById(req.params.id)
        .then(function(recipe) {
            res.status(200).json(recipe);
        });
};

function update(req, res) {
    console.log('recipe.update works!')
};

function deleteRecipe(req, res) {
    console.log('recipe.deleteRecipe works!')
};
