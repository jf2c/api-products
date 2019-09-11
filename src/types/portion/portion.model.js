const mongoose = require('mongoose')

const portionSchema = new mongoose.Schema(
  {
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'recipe'
    },
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'ingredient'
    },
    quantity: {
      type: Number,
      required: true
    }
  }
)

module.exports.Portion = mongoose.model('portion', portionSchema)
