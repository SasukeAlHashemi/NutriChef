const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],  // array of strings
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  author: {
    type: String,  // for now we'll just use text, later this can be a reference to a user
    default: "Anonymous"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
