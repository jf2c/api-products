const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    equivalentIngredients: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ingredient'
    }]
  }
)

module.exports.Ingredient = mongoose.model('ingredient', ingredientSchema)
