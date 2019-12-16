const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const ingredientModel = mongoose.model('ingredient', ingredientSchema)

module.exports = ingredientModel
