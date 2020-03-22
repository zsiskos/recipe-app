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
    let search = req.query.tags;
    console.log(search);
    Recipe.find({tags: (search)})
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => 
            res.status(500).json({ error: true })
        )};

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
            if (err) return res.redirect('api/recipes');
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
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(function(recipe){
            res.status(200).json(recipe)
        });
};

function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id, req.body)
    .then(function(recipe){
        res.status(200).json(recipe)
    });
};
