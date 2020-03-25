const Users = require('../../models/user')

module.exports = {
    index,
    showOne,
    create,
    myRecipes,
    savedRecipes
};

function index(req, res) {
    Users.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};

function showOne(req, res) {
    Users.find({name: req.params.userName})
        .then(function(user) {
            res.status(200).json(user);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};

function create(req, res) {
    Users.create(req.body)
        .then(user => {
                res.json(user);
            })
            .catch(err => {
                if (err) return res.redirect('api/users');
            res.redirect(`api/users/${user.name}`)
        });
};

function myRecipes(req, res) {
    console.log('myRecipe');
};

function savedRecipes(req, res) {
    console.log('savedrecipe');
};