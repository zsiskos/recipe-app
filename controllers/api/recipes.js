const Recipe = require('../../models/recipe')
const User = require('../../models/user')

module.exports = {
    index,
    search,
    showOne,
    create,
    update,
    deleteRecipe,
    saveToList,
    createComment,
    deleteComment
};

function index(req, res) {
    Recipe.find({})
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};

function search(req, res) {
    let search = req.query.tags;
    console.log(search);
    Recipe.find({tags: search})
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => 
            res.status(500).json({ error: true })
        )};

function showOne(req, res) {
    Recipe.findById(req.params.id)
        .then(function(recipe) {
            res.status(200).json(recipe);
        });
};

function create(req, res) {
    Recipe.create(req.body)
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            if (err) return res.redirect('api/recipes');
        res.redirect(`api/recipe/${recipe._id}`)
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

//NOT FINISHED
function saveToList(req, res) {
    Recipe.findById(req.params.id, function(err, user) {
      user.recipesSaved.push(req.body.recipeId);
      user.save(function(err) {
        res.redirect(`/api/${user.name}`);
      });
    });
};


function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id, req.body)
    .then(function(recipe){
        res.status(200).json(recipe)
    });
};

function createComment(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        recipe.save(function(err) {
            res.json(recipe);
        });
    });
};

function deleteComment(req, res) {
    Recipe.findOne({'comments._id': req.params.id}, function(err, recipe) {
        const commentSubdoc = recipe.comments.id(req.params.id);
        commentSubdoc.remove();
        recipe.save(function(err) {
            res.status(200).json(recipe);
        });
    });
};