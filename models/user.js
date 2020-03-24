const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    foodPreference: [String],
    recipesCreated: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    recipesSaved: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
},
    { timestamps: true, }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;