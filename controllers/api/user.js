const Users = require('../../models/user')

module.exports = {
    index,
};

function index(req, res) {
    Users.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err =>
            res.status(500).json({ error: true })       
        )};