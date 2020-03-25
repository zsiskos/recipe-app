const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    copy: String,
    rating: Number,
  }, 
  { timestamps: true, }
);

const RecipeSchema = new Schema({
    title: String,
    category: String,
    ingredients: String,
    instructions: String,
    tags: [String],
    photo: [String],
    video: String,
    notes: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [CommentSchema],
  }, 
  { timestamps: true, }
);

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;