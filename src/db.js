const mongoose = require('mongoose')

module.exports.connect = () =>
  mongoose.connect('mongodb://db:27017/recipes', { useNewUrlParser: true })
