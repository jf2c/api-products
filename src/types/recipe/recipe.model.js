const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    ingredients: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ingredient'
    }]
  }
)

module.exports.Recipe = mongoose.model('recipe', recipeSchema)
