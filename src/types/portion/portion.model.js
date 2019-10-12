const mongoose = require('mongoose')

const portionSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: true
  },
  ingredient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ingredient'
  }
})

module.exports.Portion = mongoose.model('portion', portionSchema)
