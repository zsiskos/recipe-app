const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: String,
    photo: [String],
    email: String,
    password: String,
    socialLinks: [String],
    foodPreferences: [String],
    recipesSaved: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
},
    { timestamps: true, }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;